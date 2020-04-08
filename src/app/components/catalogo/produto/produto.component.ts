import { Component, OnInit, Output, OnChanges, Input } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnChanges {

  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  @Input() categoria: number;
  @Input() filtro: string;
  formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };

  constructor(private requisicoes: RequisicoesService, private route: Router, private routeFiltro: ActivatedRoute) {
    this.requisicoes.getProdutos().subscribe(
      data => {
        this.produtos = data
        this.produtosFiltrados = this.produtos;

        this.routeFiltro.queryParams.subscribe(parametros => {
          if (parametros["filtro"]) {
            this.filtro = parametros["filtro"];
            this.produtosFiltrados = this.produtos.filter(produto => {
              let descricao = produto.descricao.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g, '').toLowerCase();
              return descricao.includes(this.filtro) || this.filtro == ""
            })
          }
        })
      }
    )
  }


  ngOnChanges(): void {
    this.produtosFiltrados = this.produtos.filter(
      produto => (produto.categoria.codigo == this.categoria)
    )
  }

  abrirPaginaProduto(id: number) {
    this.route.navigate(['produto/' + id]);
  }

}
