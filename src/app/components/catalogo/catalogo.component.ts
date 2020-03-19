import { Component, OnInit } from '@angular/core';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Produto } from 'src/app/model/produto';
import { Categoria } from 'src/app/model/categoria';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  listaProdutos: Produto[];
  listaCateg: Categoria[];

  constructor (private requisicoes: RequisicoesService) { }

  ngOnInit() {
  }

}
