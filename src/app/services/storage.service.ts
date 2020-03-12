import { Injectable } from '@angular/core';
import { Carrinho } from '../model/carrinho';
import { Produtos } from '../model/Produtos';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  salvarCarrinho(carrinho){
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  recuperarCarrinho(){
    return JSON.parse(localStorage.getItem('carrinho'));
  }

  salvarUsuario(cliente: Cliente){
    localStorage.setItem('cliente', JSON.stringify(cliente));
  }

  recuperarUsuario(){
    return JSON.parse(localStorage.getItem('cliente'));
  }
}
