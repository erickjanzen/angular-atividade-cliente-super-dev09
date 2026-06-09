import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoModel } from '../../models/produto.model';

@Component({
  selector: 'app-produto-cadastrar',
  imports: [FormsModule],
  templateUrl: './produto-cadastrar.html',
  styleUrl: './produto-cadastrar.scss',
})
export class ProdutoCadastrar {
  produto = signal<ProdutoModel>({
    id: crypto.randomUUID(),
    nome: "",
    estoque: null,
    preco: null
  })

  salvar(): void {
    const produtos = this.carregarProdutosDoLocalStorage();

    produtos.push(this.produto());

    const produtoString = JSON.stringify(produtos);
    localStorage.setItem("produtos", produtoString)

    alert("Produto cadastrado com sucesso");
  }

  carregarProdutosDoLocalStorage(): ProdutoModel[] {
    const produtosString = localStorage.getItem("produtos");

    if (produtosString === null) {
      return [];
    }

    return JSON.parse(produtosString) as ProdutoModel[];
  }
}
