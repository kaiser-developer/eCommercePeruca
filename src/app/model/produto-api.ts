import { Categoria } from './categoria';
import { Imagem } from './Imagem';

export class ProdutoApi {
    constructor(
        public codProduto?: number,
        public descProduto?: string,
        public categoria?: Categoria,
        public qtdProduto?: number,
        public valorProduto?: number,
        public imagens?: Imagem[]
        ){}
    }