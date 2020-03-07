import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-entrega',
  templateUrl: './dados-entrega.component.html',
  styleUrls: ['./dados-entrega.component.css']
})
export class DadosEntregaComponent implements OnInit {

  cep: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  teste(){
    this.cep++;
    console.log(this.cep);
  }

}
