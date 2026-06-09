import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutoModel } from '../../models/produto.model';

@Component({
  selector: 'app-produto-listar',
  imports: [RouterLink],
  templateUrl: './produto-listar.html',
  styleUrl: './produto-listar.scss',
})
export class ProdutoListar {
  produtos = signal<ProdutoModel[]>([]);

  // ngOnInit é uma função que é chamada quando o componente é inicializado
  ngOnInit() {
    // chamar a função que carrega os produtos do LocalStorage
    this.carregarProdutos();
  }

  readonly total = computed(() => {
    let total = 0;
    this.produtos().forEach(produto => {
      total += produto.preco! * produto.estoque!;
    });
    return total.toFixed(2).replace(".", ",");
  })

  carregarProdutos(): void {
    // Carregando do localStorage os produtos
    const produtosString = localStorage.getItem("produtos");
    if (produtosString === null) {
      return;
    }

    const produtosLista = JSON.parse(produtosString) as ProdutoModel[];

    const produtosOrdenados = produtosLista.sort((x, y) => x.nome.localeCompare(y.nome))
    // set permite alterar o valor por completo de um signal
    this.produtos.set(produtosOrdenados);
  }

  apagar(id: string): void {
    /*for (let i = 0; i < produtos.length; i++){
        let produto = produtos[i];
    } */
    // this.produtos().forEach((produto, i) => {
    //   if(produto.id === id){
    //     this.produtos().splice(i, 1);

    //     const produtosString = JSON.stringify(this.produtos());

    //     localStorage.setItem("produtos", produtosString);
    //     return;
    //   }
    // })

    // filter permite filtrar de uma lista gerando uma nova lista com os dados filtrados
    // update permite atualizar o signal
    this.produtos.update(produtos => produtos.filter(x => x.id !== id))
    const produtosString = JSON.stringify(this.produtos());
    localStorage.setItem("produtos", produtosString);
  }
}
