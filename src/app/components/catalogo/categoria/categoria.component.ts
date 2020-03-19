import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Categoria } from "src/app/model/categoria";
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Produto } from "src/app/model/produto";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoriasVisiveis: Categoria[] = [];

  @Output() categClick = new EventEmitter();

  constructor(private requisicoes: RequisicoesService) {
    this.requisicoes.getCategoria().subscribe(
      data => {
        for ( let i = 0; i< 4; i++) {
          this.categoriasVisiveis.push(data[i]);
        }
      }
    )
  }

  filtrarProds(c: Categoria) {
    this.categClick.emit(c);
  }




  ngOnInit(): void {
  }

}
