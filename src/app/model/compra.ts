import { Produto } from './produto';
import { DadosPagamento } from './dados-pagamento';

export interface Compra {
    codEndereco: number;
    formaDeEnvio: number;
    listaDeProdutos: Produto[];
    dadosPagamento: DadosPagamento;
}
