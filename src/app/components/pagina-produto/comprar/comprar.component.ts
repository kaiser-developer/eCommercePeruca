import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { RequisicoesService } from 'src/app/services/requisicoes.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnChanges {

  @Input() idProduto;
  produto: Produto;
  qtd: number = 0;

  constructor(private requisicoes: RequisicoesService) { }

  ngOnChanges(): void {
    this.requisicoes.buscarProduto(this.idProduto).subscribe(
      dados => {
        this.produto = dados
      }
      
    )
  }

}
