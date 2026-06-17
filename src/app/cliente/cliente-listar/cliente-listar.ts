import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClienteModel } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente-listar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cliente-listar.html',
  styleUrl: './cliente-listar.scss',
})
export class ClienteListar {
  clientes = signal<ClienteModel[]>([]);

  ngOnInit() {
    this.carregarClientes();
  }

  carregarClientes(): void {
    // Carregando do localStorage os clientes
    const clientesString = localStorage.getItem("clientes");
    if (clientesString === null) {
      return;
    }

    const clientesLista = JSON.parse(clientesString) as ClienteModel[];

    const clientesOrdenados = clientesLista.sort((x, y) => x.nome.localeCompare(y.nome))
    // set permite alterar o valor por completo de um signal
    this.clientes.set(clientesOrdenados);
  }

  apagar(id: string): void {
    /*for (let i = 0; i < clientes.length; i++){
        let cliente = clientes[i];
    } */
    // this.clientes().forEach((cliente, i) => {
    //   if(cliente.id === id){
    //     this.clientes().splice(i, 1);

    //     const clientesString = JSON.stringify(this.clientes());

    //     localStorage.setItem("clientes", clientesString);
    //     return;
    //   }
    // })

    // filter permite filtrar de uma lista gerando uma nova lista com os dados filtrados
    // update permite atualizar o signal
    this.clientes.update(clientes => clientes.filter(x => x.id !== id))
    const clientesString = JSON.stringify(this.clientes());
    localStorage.setItem("clientes", clientesString);
  }
}
