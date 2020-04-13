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

  constructor(private requisicoes: RequisicoesService) { 
  this.requisicoes.getCupons().subscribe(
    data => {
      this.cupons = data;
    }
  )
}

  ngOnInit(): void {
  }

}
