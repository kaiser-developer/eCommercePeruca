import { Injectable } from '@angular/core';
import { Carrinho } from '../model/carrinho';
import { Produto } from '../model/produto';
import { Cliente } from '../model/cliente';
import { Funcionario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  salvarCarrinho(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }

  recuperarCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho'));
  }

  salvarUsuario(cliente: Cliente) {
    localStorage.setItem('cliente', JSON.stringify(cliente));
  }

  salvarFunc(funcionario: Funcionario) {
    localStorage.setItem('funcionario', JSON.stringify(funcionario));
  }

  nomeCliente(): string {
    let cliente = this.recuperarUsuario();

    if (cliente != null) {
      return cliente.nome;
    }
    return "";
  }

  sexoCliente(): string {
    let cliente = this.recuperarUsuario();

    if (cliente != null) {
      return cliente.sexo;
    }
    return "";
  }
  recuperarUsuario() {
    return JSON.parse(localStorage.getItem('cliente'));
  }

  recuperarFuncionario() {
    return JSON.parse(localStorage.getItem('funcionario'));
  }

  removerFuncionario() {
    localStorage.removeItem('funcionario');
  }

  removerUsuario() {
    localStorage.removeItem('cliente');
  }

  removerCarrinho() {
    localStorage.removeItem('carrinho');
  }
}
