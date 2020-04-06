import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Carrinho } from 'src/app/model/carrinho';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  carrinho: Carrinho[] = [];
  total: number = 0;
  @Output() atualizarCarrinho: EventEmitter<any> = new EventEmitter();

  constructor(private storage: StorageService, private route:Router) { 
    this.carrinho = storage.recuperarCarrinho();

    if(this.carrinho){
      this.carrinho.forEach(
        item =>{
          this.total += (item.produto.valorProduto * item.quantidade);
        }
      )
    }
  }

  ngOnInit(): void {
  }

  mudarQuantidade(valor, item){
    if(item.quantidade == 1 && valor < 0){
      this.carrinho = this.carrinho.filter( produto => produto != item);
      this.storage.salvarCarrinho(this.carrinho);
      this.total -= item.produto.valorProduto;
    }else if(valor > 0 && item.quantidade < 6){
      item.quantidade++;
      this.storage.salvarCarrinho(this.carrinho);
      this.total += item.produto.valorProduto;
    }else if(valor < 0){
      item.quantidade--;
      this.storage.salvarCarrinho(this.carrinho);
      this.total -= item.produto.valorProduto;
    }

    this.atualizarCarrinho.emit();
  }

  removerProduto(item){
    this.total -= item.produto.valorProduto * item.quantidade;
    this.carrinho = this.carrinho.filter(
      produto => produto != item
    )
    this.storage.salvarCarrinho(this.carrinho);
    this.atualizarCarrinho.emit();
  }


  irCheckout(){
    if(this.carrinho){
      this.route.navigate(["/checkout"])
    }else{
      this.route.navigate(["/catalogo"])
      alert("Para continuar, escolha um produto!")
    }
  }
}
