import { Item } from './Item';
import { Cupom } from './cupom';

export class Compra {
    codEndereco: number;
    vlFrete: number;
    vlPedido: number;
    dsFormaPagto: string;
    codCliente: number;
    itensPedido: Item[];
    cupom: Cupom;
}