import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Carrinho } from 'src/app/model/carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho[];
  subTotal: number = 0;
  formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' };

  constructor(private storage: StorageService) { 
    this.carrinho = this.storage.recuperarCarrinho();
    this.carrinho.forEach(item => {
      this.subTotal += item.quantidade * item.produto.valor;
    })
  }

  ngOnInit(): void {
  }

  atualizarQuantidade(valor:number, item: Carrinho){
    if(item.quantidade > 1 || valor > 0){
      item.quantidade += valor;
    }else{
      this.carrinho = this.carrinho.filter(produto => 
        produto != item)
    }
    
    this.subTotal += valor * item.produto.valor;
    this.storage.salvarCarrinho(this.carrinho);
  }

}
