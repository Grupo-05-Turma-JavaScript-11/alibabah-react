import type Categoria from "./Categoria";

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    foto: string;
    preco: number;
    calorias:number;
    categoria: Categoria | null;
  }