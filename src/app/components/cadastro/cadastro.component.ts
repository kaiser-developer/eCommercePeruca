import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Cliente } from '../cadastro/shared/cliente';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formCliente: FormGroup;

  constructor() { }
  ngOnInit(): void {
    this.createForm(new Cliente());

  }
  createForm(cliente: Cliente) {

    this.formCliente = new FormGroup({

      nome: new FormControl(cliente.nome),
      cpf: new FormControl(cliente.cpf),
      tel: new FormControl(cliente.tel),  
      email: new FormControl(cliente.email),
      senha: new FormControl(cliente.senha)
    })
  }

}


