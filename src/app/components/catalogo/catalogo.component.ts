import { Component, OnInit} from '@angular/core';
import { Categoria } from 'src/app/model/categoria';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {


  categoria: number = -1;

  constructor () { }

  filtrarCategoria(categ: Categoria) {
    this.categoria = categ.codigo;
  }

  ngOnInit() {
  }

}
