export class Endereco {
    constructor(public cep: string,
                public rua: string,
                public numero: number,
                public bairro: string,
                public cidade: string,
                public estado: string,
                public complemento: string = null){}
}
