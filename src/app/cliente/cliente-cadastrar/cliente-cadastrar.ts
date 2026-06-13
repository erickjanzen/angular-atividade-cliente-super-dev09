import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteModel } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente-cadastrar',
  imports: [FormsModule],
  templateUrl: './cliente-cadastrar.html',
  styleUrl: './cliente-cadastrar.scss',
})
export class ClienteCadastrar {
  cliente = signal<ClienteModel>({
    id: crypto.randomUUID(),
    nome: "",
    email: "",
    telefone: null
  })

  salvar(): void {
    const clientes = this.carregarClientesDoLocalStorage();

    clientes.push(this.cliente());

    const clienteString = JSON.stringify(clientes);
    localStorage.setItem("clientes", clienteString)

    alert("Cliente cadastrado com sucesso");
  }

  carregarClientesDoLocalStorage(): ClienteModel[] {
    const clientesString = localStorage.getItem("clientes");

    if (clientesString === null) {
      return [];
    }

    return JSON.parse(clientesString) as ClienteModel[];
  }
}