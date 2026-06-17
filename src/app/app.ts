import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { BoasVindas } from './boas-vindas/boas-vindas';
import { CidadeBlumenau} from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial} from './cidade-indaial/cidade-indaial';
import { Navbar } from './navbar/navbar'
import { ClienteCadastrar } from './cliente/cliente-cadastrar/cliente-cadastrar';
import { ClienteListar } from './cliente/cliente-listar/cliente-listar';
import { ClienteEditar } from './cliente/cliente-editar/cliente-editar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, BoasVindas, CidadeBlumenau, CidadeIndaial, Navbar, ClienteCadastrar, ClienteListar, ClienteEditar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('escola-ng');
}
