import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Endereco } from '../model/endereco';
import { Uf } from '../model/uf';
import { Produtos } from '../model/Produtos';
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
    let url = this.http.get<Produtos[]>("http://localhost:3000/produto");
    return url.pipe(map(
      valores => valores
    ));
  }

  getCliente(email: String, senha: String){
    if(email == "gabriel@gmail.com" && senha == "12345678"){
      let cliente: Cliente = new Cliente("César", "37647904825", "11948128589", "asa.cesar@gmail.com");
      storage.salvarUsuario(cliente);
      return true;
    }else{
      return false;
    }
  }

  

  public cadastrarUsuario(cliente: Cliente){
    this.http.post<any>("http://localhost:8080/criar-cliente", cliente).subscribe(
      data => {
        if(data != null){
          storage.salvarUsuario(data);
        }
      }
    )
  }

  public realizarLogin(login: Login){
    this.http.post<any>("http://localhost:8080/login-cliente", [login.email, login.senha]).subscribe(
      data => {
        if(data != null){
          storage.salvarUsuario(data);
        }        
      }
    )
    if(storage.recuperarUsuario() != null){
      return true;
    }else{
      return false;
    }
  }
}
