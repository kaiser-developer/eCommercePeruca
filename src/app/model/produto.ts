export class Produto {
    constructor(
        public _idProd?:number, 
        public _nome?:string,
        public _preco?:string,
        public _codGrupo?: number) {}

        public get cod(): number {
            return this._idProd;
        }
    
        public get nome(): string {
            return this._nome;
        }
    
        public set nome(value: string) {
            this._nome = value;
        }
    
        public get preco(): string {
            return this._preco;
        }
    
        public set preco(value: string) {
            this.preco = value;
        }
       
        public get cod_grupo(): number {
            return this._codGrupo;
        }
    
        public set cod_grupo(value: number){
            this._codGrupo = value;
        }

    }