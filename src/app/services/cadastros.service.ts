import { Injectable } from '@angular/core';
import { Endereco } from '../model/endereco';
import { StorageService } from './storage.service';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../model/cliente';
import { map } from "rxjs/operators";
import { Compra } from '../model/compra';
import { Item } from '../model/Item';
import { Carrinho } from '../model/carrinho';

const storage: StorageService = new StorageService();

const enderecoBanco = (endereco, codCliente) =>{
  console.log(endereco);
  return {
    "destinatario": endereco.destinatario,
    "lougradouro": endereco.logradouro,
    "numero": endereco.numero,
    "bairro": endereco.bairro,
    "complemento": endereco.complemento,
    "cidade": endereco.localidade,
    "estado": endereco.uf,
    "cep": endereco.cep,
    "codCliente":codCliente
  }
}

@Injectable({
  providedIn: 'root'
})

  
export class CadastrosService {

  constructor(private http: HttpClient) { }

  public cadastrarCompra(endereco, frete: number, total: number){
    let compra: Compra = new Compra();
    console.log(endereco, frete, storage.recuperarCarrinho(), storage.recuperarUsuario())
    compra.codCliente = endereco.codCliente;
    compra.codEndereco = endereco.codEndereco;
    compra.dsFormaPagto = "credito";
    compra.vlFrete = frete;
    compra.vlPedido = total;
    compra.itensPedido = [];
    let carrinho: Carrinho [] = storage.recuperarCarrinho();
    carrinho.forEach(peruca => {
      let item: Item = new Item();
      item.codProduto = peruca.produto.codProduto;
      item.quantidade = peruca.quantidade;
      compra.itensPedido.push(item);
    })

    let url = this.http.post<any>("http://localhost:8080/ecommerce/cadastrar-pedido", compra);
    return url.pipe(map(
      dados => dados
    ))
  }

  public cadastrarEndereco(endereco: Endereco, codCliente){
    let url = this.http.post<any>("http://localhost:8080/ecommerce/cadastrar-endereco", enderecoBanco(endereco, codCliente));
    return url.pipe(map(
      dados => dados
    ))
  }

  public cadastrarUsuario(cliente: Cliente){
    let url = this.http.post<any>("http://localhost:8080/ecommerce/criar-cliente", cliente);
    return url.pipe(map(
      dados => dados
    ));
  }
}
