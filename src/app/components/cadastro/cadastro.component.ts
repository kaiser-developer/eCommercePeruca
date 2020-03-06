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
  onSubmit() {

    console.log(this.formCliente.value);
    this.formCliente.reset(new Cliente());
  }

  validacaoNome(event: any) {
    let evento = event;
    let key = evento.keyCode || evento.which;
    key = String.fromCharCode(key);
    //let regex = /^[0-9.,]+$/;
    let regex = /^[a-z A-Z]+$/;
    if (!regex.test(key)) {
      evento.returnValue = false;
      if (evento.preventDefault) evento.preventDefault();
    }
  }
  validacaoTelefone(event: any) {
    let evento = event;
    let key = evento.keyCode || evento.which;
    key = String.fromCharCode(key);
    let regex = /^[0-9]+$/;
    let tamanho = this.formCliente.value.tel.length;
    if (!regex.test(key) || tamanho == 15) {
      evento.returnValue = false;
      if (evento.preventDefault) evento.preventDefault();
    }
    if (tamanho == 0) {
      this.formCliente.value.tel += '(';
    }
    if (tamanho == 3) {
      this.formCliente.value.tel += ') ';
    }
    if (tamanho == 9) {
      this.formCliente.value.tel += '-';
    }
    if (this.formCliente.value.tel == 14) {
      this.formCliente.value.tel = this.formCliente.value.tel.substring(0, 9) + this.formCliente.value.tel[10] + '-' + this.formCliente.value.tel.substring(11);
    }
  }
 
  

//   inputConfirm.addEventListener("keyup", (e) => {
//     if (inputConfirm.value != inputSenha.value) {
//         inputSenhasIguais.value = false;
//         inputConfirm.setAttribute("class", "form-control is-invalid");
//     } else {
//         inputConfirm.setAttribute("class", "form-control is-valid");
//         inputSenhasIguais.value = true;
//     }
// })
}

