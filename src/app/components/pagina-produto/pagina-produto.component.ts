import { Component, OnInit } from '@angular/core';
// import { Validacoes } from 'src/app/model/validacoes';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {

  //validacoes: Validacoes;


  constructor() { 
    // this.validacoes = new Validacoes()
  }
 
 // permitirNumeros(evento: any){
  //  this.validacoes.cancelarLetras(evento);
// }
  
  ngOnInit(): void {
  }

}
