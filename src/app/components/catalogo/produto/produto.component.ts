import { Component, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { Categoria } from 'src/app/model/categoria';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtosVisiveis: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  category: Categoria[] = [];

  constructor(private requisicoes: RequisicoesService, private route: Router) { 
    this.requisicoes.getProdutos().subscribe(
      data => {
        for(let i =0; i < 16; i++){
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
