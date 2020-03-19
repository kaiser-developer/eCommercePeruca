import { Component, OnInit } from '@angular/core';
import { Categoria } from "src/app/model/categoria";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor() { }

categorias = [
  new Categoria("lisos"),
  new Categoria("cacheados"),
  new Categoria("ondulados"),
  new Categoria("cosplay"),
  new Categoria("naturais"),
  new Categoria("crespos")
]

  ngOnInit(): void {
  }

}
