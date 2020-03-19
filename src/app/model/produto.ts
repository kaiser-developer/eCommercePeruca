import { Imagem } from './Imagem';
import { Categoria } from './categoria';

export class Produto {
    constructor(public codProduto?: number,
        public descricao?: string,
        public valorProduto?: number,
        public imagens?: Imagem[],
        public categoria?: Categoria){}
}