import { Component, OnInit } from '@angular/core';
import { Categoria } from "src/app/model/categoria";
import { RequisicoesService } from 'src/app/services/requisicoes.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoriasVisiveis: Categoria[] = [];

  constructor(private requisicoes: RequisicoesService) {
    // this.requisicoes.getCategoria().subscribe(
    //   data => {
    //     for ( let i = 0; i< 6; i++) {
    //       this.categoriasVisiveis.push(data[i]);
    //     }
    //   }
    // )
  }


  ngOnInit(): void {
  }

}
