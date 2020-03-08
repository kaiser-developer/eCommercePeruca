export class DadosPagamento {
    constructor(
        public numeroCartao: string,
        public dataValidade: string,
        public cvv: string,
        public nomeTitular: string,
        public cpf: string,
    ) {}
}
