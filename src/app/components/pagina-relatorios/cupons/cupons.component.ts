import { Component, OnInit } from '@angular/core';
import { Cupom } from 'src/app/model/cupom';
import { RequisicoesService } from 'src/app/services/requisicoes.service';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.component.html',
  styleUrls: ['./cupons.component.css']
})
export class CuponsComponent implements OnInit {
  
  cupons: Cupom[] = [];
  
  Desativar: false
  

  constructor(private requisicoes: RequisicoesService) { 
    this.requisicoes.getCupons().subscribe(
      data => {
        this.cupons = data;
      }
    )
  }

  ativarCupom() {
    let ativar = true;
    for(let i = 0;i < this.cupons.length;i++) {
      if(this.cupons[i].ativo == false) {
        return this.cupons[i].ativo == ativar;
      }
    }
  }

  desativarCupom() {
    let desativar = false;
    for(let i = 0;i < this.cupons.length;i++) {
      if(this.cupons[i].ativo == true) {
        return this.cupons[i].ativo = desativar;
      }
    }
  }

  ngOnInit(){}

}
