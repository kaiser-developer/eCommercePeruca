import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/model/Grupo';
import { Categoria } from "src/app/model/categoria";


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  private grupoTotal = new Categoria ("Todos");

  public grupos: Categoria[] = [];
  @Output() grupoClicado = new EventEmitter();
  constructor() {

  }



  ngOnInit(): void {
  }

}