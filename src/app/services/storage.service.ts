import { Injectable } from '@angular/core';
import { Carrinho } from '../model/carrinho';
import { Produto } from '../model/produto';
import { Cliente } from '../model/cliente';
import { Funcionario } from '../model/funcionario';
import { ProdutoApi } from '../model/produto-api';

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
    localStorage.setItem('cliente', btoa(JSON.stringify(cliente)));
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
    let cliente = localStorage.getItem('cliente');
    if(cliente != null)
      cliente = atob(cliente);
    return JSON.parse(cliente);
  }

  recuperarFuncionario() {
    let funcionario = localStorage.getItem('funcionario');
    if(funcionario != null)
    funcionario = atob(funcionario);
    return JSON.parse(funcionario);
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
  salvarProduto(produto: Produto) {
    localStorage.setItem('produto', JSON.stringify(produto));
  }
}
