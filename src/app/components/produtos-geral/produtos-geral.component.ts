import { Component, OnInit, ViewChild } from '@angular/core';
import { Grupo } from 'src/app/model/grupo';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

@Component({
  selector: 'app-produtos-geral',
  templateUrl: './produtos-geral.component.html',
  styleUrls: ['./produtos-geral.component.css']
})
export class ProdutosGeralComponent implements OnInit {


  grupo: number = 0;
  @ViewChild("lista") lista: ListaProdutosComponent;
  constructor() { }
  


grupoAtivo: Grupo = null;

  listarGrupo(grupo: Grupo) {
    console.log(grupo);
    this.grupo = grupo.codigo;
    
  }
  ngOnInit(): void {
  }

}
