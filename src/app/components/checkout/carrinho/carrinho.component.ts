import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Carrinho } from 'src/app/model/carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho[] = [];
  subTotal: number = 0;
  formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' };
  @Input() frete: number = 0;

  constructor(private storage: StorageService) { 
    this.carrinho = this.storage.recuperarCarrinho();
    if(this.carrinho != null){
      this.carrinho.forEach(item => {
        this.subTotal += item.quantidade * item.produto.valorProduto;
      })
    }else{
      this.carrinho = [];
    }
    
  }

  ngOnInit(): void {
  }

}
