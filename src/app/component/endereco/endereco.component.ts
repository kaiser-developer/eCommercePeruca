import { Component, OnInit, Input } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() endereco: Endereco;

  constructor() {
   }

  ngOnInit(): void {
  }

}
