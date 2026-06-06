import { Routes } from '@angular/router';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { CidadeIndaial } from './cidade-indaial/cidade-indaial';
import { FormCamposBasico } from './form-campos-basico/form-campos-basico';

export const routes: Routes = [
    { path: "cidade/blumenau", loadComponent: () => CidadeBlumenau},
    { path: "cidade/indaial", loadComponent: () => CidadeIndaial},
    { path: "formulario/campos-basico", loadComponent: () => FormCamposBasico}
];
// Escolher Carros || Filmes || Comidas
// 3 de (carros||filmes|||comidas) (3 rotas, 3 componentes)
// em cada um 10 detalhes sobre cada um, 4 imagens de cada um, tabela
// Links  

/*
Criar repo no github

git add .
git commit -m "Aula"
git branch -M main
git remote add origin <link-repo>
git push origin main
*/