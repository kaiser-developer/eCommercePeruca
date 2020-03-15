import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/model/Grupo';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  private grupoTotal = new Grupo (0,"Todos");

  public grupos: Grupo[] = [];
  @Output() grupoClicado = new EventEmitter();
  constructor() {

  }



  ngOnInit(): void {
  }

}