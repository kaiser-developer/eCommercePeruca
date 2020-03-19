import { Component, OnInit, ViewChild } from '@angular/core';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaComponent } from './categoria/categoria.component';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  @ViewChild('categoria') category: CategoriaComponent;
  

  constructor () { }

  filtrarCategoria(categ: Categoria) {
    this.category.filtrarProds(categ);
  }

  ngOnInit() {
  }

}
