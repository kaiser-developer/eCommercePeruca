import { Produtos } from './produtos';
import { DadosPagamento } from './dados-pagamento';

export interface Compra {
    codEndereco: number;
    formaDeEnvio: number;
    listaDeProdutos: Produtos;
    dadosPagamento: DadosPagamento;
}
