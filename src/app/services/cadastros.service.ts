import { Injectable } from '@angular/core';
import { Endereco } from '../model/endereco';
import { StorageService } from './storage.service';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../model/cliente';
import { map } from "rxjs/operators";

const storage: StorageService = new StorageService();

@Injectable({
  providedIn: 'root'
})

  
export class CadastrosService {

  constructor(private http: HttpClient) { }

  public cadastrarCompra(endereco: Endereco, frete: number){
    console.log(endereco, frete, storage.recuperarCarrinho(), storage.recuperarUsuario())
  }

  public cadastrarEndereco(endereco: Endereco){
    console.log(endereco);
  }

  public cadastrarUsuario(cliente: Cliente){
    let url = this.http.post<any>("http://localhost:8080/ecommerce/criar-cliente", cliente);
    return url.pipe(map(
      dados => dados
    ));
  }
}
