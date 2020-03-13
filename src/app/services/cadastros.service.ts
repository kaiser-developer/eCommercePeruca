import { Injectable } from '@angular/core';
import { Endereco } from '../model/endereco';
import { StorageService } from './storage.service';
import { HttpClient } from "@angular/common/http";
import { Cliente } from '../model/cliente';

const storage: StorageService = new StorageService();

@Injectable({
  providedIn: 'root'
})

  
export class CadastrosService {

  constructor() { }

  public cadastrarCompra(endereco: Endereco, frete: number){
    console.log(endereco, frete, storage.recuperarCarrinho(), storage.recuperarUsuario())
  }

  public cadastrarEndereco(endereco: Endereco){
    console.log(endereco);
  }
}