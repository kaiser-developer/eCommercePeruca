import { Produto } from './produto';

export class Carrinho {
    constructor(public produto: Produto, public quantidade: number){}
}
