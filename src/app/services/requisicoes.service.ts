import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Endereco } from '../model/endereco';
import { Uf } from '../model/uf';

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
}
