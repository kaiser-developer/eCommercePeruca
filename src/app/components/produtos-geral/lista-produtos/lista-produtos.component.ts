import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { Categoria } from 'src/app/model/categoria';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  @Input() grupoAtivo: number = 10;

  produtosFiltro = this.grupoAtivo;
  
  ativo = {
    codGrupo : this.grupoAtivo
  }

    produtosVisiveis: Produto[] = [];

    constructor(private requisicoes: RequisicoesService, private route: Router) { 
      this.requisicoes.getProdutos().subscribe(
        data => {
          for(let i =0; i < this.produtosVisiveis.length; i++){
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



