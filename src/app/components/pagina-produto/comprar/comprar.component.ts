import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Carrinho } from 'src/app/model/carrinho';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnChanges {

  @Input() idProduto;
  produto: Produto;
  carrinho: Carrinho[] = [];
  compra: Carrinho = new Carrinho();

  constructor(private requisicoes: RequisicoesService, private storage: StorageService) { }

  ngOnChanges(): void {
    this.requisicoes.buscarProduto(this.idProduto).subscribe(
      dados => {
        this.produto = dados
      }
      
    )
  }

  adicionarNoCarrinho(qtd){
    this.carrinho = this.storage.recuperarCarrinho();
    this.compra.produto = this.produto;
    this.compra.quantidade = +qtd;
    console.log(this.compra)
    if(this.carrinho != null){
      this.carrinho = this.carrinho.filter(
        item => item.produto.codProduto != this.produto.codProduto
      )
      this.carrinho.push(this.compra);
    }else{
      this.carrinho = [];
      this.carrinho.push(this.compra);
    }

    this.storage.salvarCarrinho(this.carrinho);
    alert("Item adicionado no carrinho");
  }
}
