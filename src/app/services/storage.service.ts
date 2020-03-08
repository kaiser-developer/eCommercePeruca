  
import { Injectable } from '@angular/core';
import { Carrinho } from '../model/carrinho';
import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  salvarCarrinho(carrinho){
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  recuperarCarrinho(){
    return JSON.parse(localStorage.getItem('carrinho'))
  }
}