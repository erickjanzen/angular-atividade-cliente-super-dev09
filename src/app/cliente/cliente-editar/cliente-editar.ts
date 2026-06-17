import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteModel } from '../../models/cliente.model';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-editar',
  imports: [FormsModule],
  templateUrl: './cliente-editar.html',
  styleUrl: './cliente-editar.scss',
})
export class ClienteEditar {
  cliente = signal<ClienteModel>({
    id: "",
    nome: "",
    email: "",
    telefone: null
  });

  // Método que é utilizado quando é instaciado um objeto da classe Clienteeditar
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    // activeRoute é a rota que o usuário está neste momento
    // snapshot é uma captura da rota atual com os dados daquela rota
    // paramMap é um dicionário com as variáveis da rota
    // get pegamos o id definido na rota /produtos/editar/:id
    const idParaEditar = activeRoute.snapshot.paramMap.get("id");

    // Carregar a lista de produtos do localStorage
    const clienteStrings = localStorage.getItem("clientes");
    if (clienteStrings === null) {
      alert("Nenhum cliente cadastrado")
      router.navigate(["/clientes"]);
      return;
    }

    const clientes = JSON.parse(clienteStrings) as ClienteModel[];
    debugger;
    const clientesEncontrados = clientes.filter(cliente => cliente.id === idParaEditar);
    if (clientesEncontrados.length === 0) {
      alert("Cliente não econtrado")
      router.navigate(["/clientes"]);
      return;
    }

    this.cliente.set(clientesEncontrados[0]);

  }

  salvar(): void {
    const clientes = this.carregarClientesDoLocalStorage();

    const indiceClienteParaEditar = clientes.findIndex(x => x.id === this.cliente().id);
    clientes[indiceClienteParaEditar].nome = this.cliente().nome;
    clientes[indiceClienteParaEditar].email = this.cliente().email;
    clientes[indiceClienteParaEditar].telefone = this.cliente().telefone;
    
    const clienteString = JSON.stringify(clientes);
    localStorage.setItem("clientes", clienteString)

    alert("Cliente alterado com sucesso");

    this.router.navigate(["/clientes"]);
  }

  carregarClientesDoLocalStorage(): ClienteModel[] {
    const clientesString = localStorage.getItem("clientes");

    if (clientesString === null) {
      return [];
    }

    return JSON.parse(clientesString) as ClienteModel[];
  }
}
