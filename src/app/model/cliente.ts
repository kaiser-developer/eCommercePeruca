export class Cliente {
   constructor(
   public nomeCompleto?: string,
   public cpf?: string,
   public telefone?: string,
   public email?: string,
   public senha?: string,
   public codCliente: number = null){}
   
}