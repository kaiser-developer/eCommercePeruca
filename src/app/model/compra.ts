import { Item } from './Item';

export class Compra {
    codEndereco: number;
    vlFrete: number;
    vlPedido: number;
    dsFormaPagto: string;
    codCliente: number;
    itensPedido: Item[];
}