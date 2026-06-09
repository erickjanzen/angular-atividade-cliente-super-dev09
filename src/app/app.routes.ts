import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './cidade-indaial/cidade-indaial';
import { FormCamposBasico } from './form-campos-basico/form-campos-basico';
import { ProdutoCadastrar } from './produtos/produto-cadastrar/produto-cadastrar';
import { ProdutoListar } from './produtos/produto-listar/produto-listar';
import { ProdutoEditar } from './produtos/produto-editar/produto-editar';

export const routes: Routes = [
    { path: "cidade/blumenau", loadComponent: () => CidadeBlumenau},
    { path: "cidade/indaial", loadComponent: () => CidadeIndaial},
    { path: "formulario/campos-basico", loadComponent: () => FormCamposBasico},
    { path: "produtos/cadastrar", loadComponent: () => ProdutoCadastrar },
    { path: "produtos", loadComponent: () => ProdutoListar},
    { path: "produtos/editar/:id", loadComponent: () => ProdutoEditar}
];