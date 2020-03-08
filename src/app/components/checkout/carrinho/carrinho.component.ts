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
  total: number = 0;

  constructor(private storage: StorageService) { 
    this.carrinho = this.storage.recuperarCarrinho();
    this.carrinho.forEach(item => {
      this.total += item.quantidade * item.produto.valor;
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
    
    this.total += valor * item.produto.valor;
  }

}
