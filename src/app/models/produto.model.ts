// src/app/models/produto.model.ts
export interface ProdutoModel{
    id: string;
    nome: string;
    preco: number | null;
    estoque: number | null;
}