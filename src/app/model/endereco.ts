export class Endereco {
    constructor(public cep: string,
                public logradouro: string,
                public numero: number,
                public bairro: string,
                public cidade: string,
                public estado: string,
                public destinatario: string,
                public complemento: string = null){}
}
