import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Endereco } from '../model/endereco';
import { Uf } from '../model/uf';
import { Produto } from '../model/produto';
import { StorageService } from './storage.service';
import { Login } from '../model/login';
import { Categoria } from '../model/categoria';
import { Cupom } from '../model/cupom';
import { Compra } from '../model/compra';
import { Funcionario } from "../model/funcionario";
import { Cliente } from '../model/cliente';

const storage: StorageService = new StorageService();

@Injectable({
  providedIn: 'root'
})

export class RequisicoesService {

  constructor(private http: HttpClient) { }

  getEnderecoViaCep(cep: string) {
    let url = this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
    return url.pipe(
      map(
        dados => dados
      )
    )
  }

  getEstados() {
    let url = this.http.get<Uf[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`);
    return url.pipe(
      map(
        dados => dados
      )
    )
  }

  getProdutos() {
    let url = this.http.get<Produto[]>("http://localhost:8080/ecommerce/buscar-produto");
    return url.pipe(map(
      valores => valores
    ));
  }

  getProdutosMaisVendidos() {
    let url = this.http.get<Produto[]>("http://localhost:8080/ecommerce/buscar-produtos/mais-vendidos");
    return url.pipe(map(
      valores => valores
    ));
  }

  public realizarLogin(login: Login) {
    let url = this.http.post<any>("http://localhost:8080/ecommerce/login-cliente", [login.email, login.senha]);
    return url.pipe(map(
      dados => {
        return dados
      }
    ));
  }

  public loginFunc(funcionario: Funcionario) {
    let url = this.http.post<any>("http://localhost:8080/ecommerce/login-funcionario",funcionario);
    console.log(funcionario)
    return url.pipe(map(
      dados => dados
    ));
  }

  public buscarProduto(id) {
    let url = this.http.get<Produto>("http://localhost:8080/ecommerce/buscar-produto/" + id)
    return url.pipe(map(
      produto => produto
    ))
  }

  public buscarEndereco(id) {
    let url = this.http.get<any>("http://localhost:8080/ecommerce/enderecos/" + id)
    return url.pipe(map(
      enderecos => enderecos
    ))
  }

  getCategoria() {
    let url = this.http.get<Categoria[]>(`http://localhost:8080/ecommerce/buscar-categorias`);
    return url.pipe(
      map(
        data => data
      )
    )
  }

  public getCupons(){
    let idCliente = storage.recuperarUsuario().codCliente;
    let url = this.http.get<Cupom[]>(`http://localhost:8080/ecommerce/buscar-cupons-cliente/${idCliente}`);
    return url.pipe(
      map(
        data => data
      )
    )
  }

  public getPedidos(){
    let idCliente = storage.recuperarUsuario().codCliente;
    let url = this.http.get<Compra[]>(`http://localhost:8080/ecommerce/buscar-pedidos/${idCliente}`);
    return url.pipe(
      map(
        data => data
      )
    )
  }

  public cancelarPedido(codigoPedido:number){
    let url = this.http.patch<Compra>(`http://localhost:8080/ecommerce/cancelar-pedido/${codigoPedido}`, null);
    return url.pipe(
      map(
        data => data
      )
    )
  }

  public endereco(codigoEndereco: number){
    let url = this.http.get<any>("http://localhost:8080/ecommerce/endereco/" + codigoEndereco)
    return url.pipe(
      map(
        data => data
      )
    )
  }

  public enviarCodigoRedefinicao(email: String){
    let url = this.http.patch<any>("http://localhost:8080/ecommerce/enviar-codigo/", [email])
    return url.pipe(
      map(
        dados => dados
      )
    )
  }

  public redefinirSenha(email: string, codigo: string, senha: string){
    let url = this.http.patch<Cliente>("http://localhost:8080/ecommerce/redefinir-senha", [email, codigo, senha])
    return url.pipe(
      map(
        dados => dados
      )
    )
  }
<<<<<<< HEAD
  public deletarProduto(codProduto: Produto){
    let url = this.http.delete<Produto>(`http://localhost:8080/ecommerce/deletar-produto/${codProduto}`);
    return url.pipe(
      map(
        data => data
=======

  public produtosRecomendados(codProduto: number){
    let url = this.http.get<Produto[]>("http://localhost:8080/ecommerce/buscar-produtos/recomendados/" + codProduto)
    return url.pipe(
      map(
        dados => dados
      )
    )
  }

  public produtosCategoria(codProduto:number, categoria: number){
    let url = this.http.get<Produto[]>(`http://localhost:8080/ecommerce/buscar-produtos/categoria/${codProduto}/${categoria}`)
    return url.pipe(
      map(
        dados => dados
>>>>>>> 2c9f4f9a803fd6f43d4abb7bc98e4a45764c8a2d
      )
    )
  }
}
