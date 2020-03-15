import { Component, OnInit } from '@angular/core';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Produto } from 'src/app/model/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mais-vendidos',
  templateUrl: './mais-vendidos.component.html',
  styleUrls: ['./mais-vendidos.component.css']
})
export class MaisVendidosComponent implements OnInit {

  produtosVisiveis: Produto[] = [];

  constructor(private requisicoes: RequisicoesService, private route: Router) { 
    this.requisicoes.getProdutos().subscribe(
      data => {
        for(let i =0; i < 4; i++){
          this.produtosVisiveis.push(data[i]);
        }
      }
    )
  }

  ngOnInit(): void {
  }

  abrirPaginaProduto(id: number){
    this.route.navigate(['produto/' + id]);
  }

}
