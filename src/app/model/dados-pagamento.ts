export class DadosPagamento {
    constructor(
        public numeroCartao: string,
        public anoValidade: string,
        public mesValidade: string,
        public cvv: string,
        public nomeTitular: string,
        public cpf: string,
    ) {}
}
