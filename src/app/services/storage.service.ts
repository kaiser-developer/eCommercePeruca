import { Injectable } from '@angular/core';
import { Carrinho } from '../model/carrinho';
import { Produto } from '../model/produto';
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

  nomeCliente():string{
    let cliente = this.recuperarUsuario();

    if(cliente != null){
      return cliente.nome;
    }
    return "";
  }

  recuperarUsuario(){
    return JSON.parse(localStorage.getItem('cliente'));
  }

  removerUsuario(){
    localStorage.removeItem('cliente');
  }

  removerCarrinho(){
    localStorage.removeItem('carrinho');
  }
}
