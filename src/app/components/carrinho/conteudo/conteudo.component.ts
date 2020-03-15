import { Component, OnInit } from '@angular/core';
import { Contribuidor } from 'src/app/model/contribuidor';


@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  contribuidores: Contribuidor[] = [];

  constructor() { 
    this.contribuidores.push(
      new Contribuidor("César Silva", 21, "Tec-Lider", "https://i.imgur.com/FBA4I9M.jpg"),
      new Contribuidor("Daniel Rodrigues", 20, "Back-End", "https://i.imgur.com/QjNjWBL.jpg"),
      new Contribuidor("Gabriel Maziero", 31,"Back-End", "https://i.imgur.com/sqsU9S2.jpg"),
      new Contribuidor("Michelle Santana", 24, "Front-End", "https://i.imgur.com/BNm2RQA.jpg"),
      new Contribuidor("Vitor Oliveira", 24, "Front-End", "https://i.imgur.com/nPSdjYI.jpg" )
    )
  }

 
  ngOnInit(): void {
  }

}
