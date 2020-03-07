import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-endereco',
  templateUrl: './cadastro-endereco.component.html',
  styleUrls: ['./cadastro-endereco.component.css']
})
export class CadastroEnderecoComponent implements OnInit {

  @Output() novoEndereco = new EventEmitter();
  formEndereco: FormGroup;

  private createForm(endereco: Endereco): FormGroup {
    return new FormGroup({
      destinatario: new FormControl(endereco.destinatario),
      cep: new FormControl(endereco.cep),
      logradouro: new FormControl(endereco.logradouro),
      numero: new FormControl(endereco.numero),
      bairro: new FormControl(endereco.bairro),
      cidade: new FormControl(endereco.cidade),
      estado: new FormControl(endereco.estado),
      complemento: new FormControl(endereco.complemento)

    })
  }

  constructor() { 
    this.formEndereco = this.createForm(new Endereco("", "", 0, "", "", "", ""));
  }

  ngOnInit(): void {
  }

}
