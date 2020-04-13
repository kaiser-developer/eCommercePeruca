export class FaleConosco {
    constructor(
    public nomeCompleto?: string,
    public telefone?: string,
    public email?: string,
    public mensagem?: string,
    public assuntoMensagem?: string,
    public codCliente?: number, 
    public codFaleConosco: number = null){}
}