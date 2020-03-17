import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtosVisiveis: Produto[] = [];

  constructor(private requisicoes: RequisicoesService, private route: Router) { 
    this.requisicoes.getProdutos().subscribe(
      data => {
        for(let i =0; i < 20; i++){
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
