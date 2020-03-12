import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/model/Grupo';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  private grupoTotal = new Grupo (0,"Todos");

  public grupos: Grupo[] = [];
  @Output() grupoClicado = new EventEmitter();
  constructor(private http:HttpService) {


    this.http.getGrupo().subscribe(
      (data) => { 
        this.grupos = [this.grupoTotal,...data];
      }
    )
  }



  ngOnInit(): void {
  }

}