import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Endereco } from '../model/endereco';
import { Uf } from '../model/uf';
import { Produto } from '../model/produto';
import { Cliente } from '../model/cliente';
import { StorageService } from './storage.service';
import { Login } from '../model/login';
import { truncate } from 'fs';

const storage: StorageService = new StorageService();

@Injectable({
  providedIn: 'root'
})

export class RequisicoesService {

  constructor(private http: HttpClient) { }

  getEnderecoViaCep(cep: string){
    let url = this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
    return url.pipe(
      map(
          dados => dados
      )
    )
  }

  getEstados(){
    let url = this.http.get<Uf[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`);
    return url.pipe(
      map(
          dados => dados
      )
    )
  }

  getProdutos(){
    let url = this.http.get<Produto[]>("http://localhost:8080/ecommerce/buscar-produto");
    return url.pipe(map(
      valores => valores
    ));
  }

  public realizarLogin(login: Login){
    let url = this.http.post<any>("http://localhost:8080/ecommerce/login-cliente", [login.email, login.senha]);
    console.log(login);
    return url.pipe(map(
      dados => dados
    ));
  }

  public buscarProduto(id){
    let url = this.http.get<Produto>("http://localhost:8080/ecommerce/buscar-produto/" + id)
    return url.pipe(map(
      produto => produto
    ))
  }

  public buscarEndereco(id){
    let url = this.http.get<any>("http://localhost:8080/ecommerce/enderecos/" + id)
    return url.pipe(map(
      enderecos => enderecos
    ))
  }
}
