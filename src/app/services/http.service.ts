import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Grupo } from '../models/Grupo';
import { map } from "rxjs/operators";
import { Produto } from '../models/Produto';

const URL : string = "https://localhost:8080/ecommerce/"

function adaptadorDeGrupo(data:any[]) {
  return data.map(
    (el) => {return new Grupo(el.codigo , el.descricao)}
  )
}

function adaptadorProdutos(data:any[]) {
  return data.map(
    (el) => { return new Produto(el.idProd,el.nome,el.preco,el.codGrupo)}
  )
}



@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit{

  constructor(private http:HttpClient) { }

  // result: any;
  // urlToJson = '../assets/testes.json';

  getGrupo(){
    let obs= this.http.get(URL+"category-list");
    return obs.pipe(
      map(adaptadorDeGrupo));

  }
  getProduto(){
    let prod = this.http.get(URL+"lista-produtos");
    return prod.pipe(
      map(adaptadorProdutos)
    )
  }

  ngOnInit(): void {
    // this.http.get<any>(this.urlToJson).subscribe(response => {
    //   this.result = response;
    // });
  }

}
