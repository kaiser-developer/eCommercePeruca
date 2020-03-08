import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, Form, FormControl } from "@angular/forms";
import { Cliente } from '../cadastro/shared/cliente';
import { Validacoes } from 'src/app/modelo/validacoes';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formCliente: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(){ 
    this.formCliente = this.formBuilder.group({
      nome: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      tel: [null, [Validators.required]],
      email: [null, [Validators.required]],
      senha: [null, [Validators.required, Validators.minLength(5)]],
      confirmarSenha: [null, [Validacoes.equalsTo('senha ')]]
      //confirmarSenha: [(cliente.confirmarSenha), Validators.required]
    });
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
  validacaoCpf(event: any) {
    let evento = event;
    let key = evento.keyCode || evento.which;
    key = String.fromCharCode(key);
    let regex = /^[0-9]+$/;
    let tamanho = this.formCliente.value.cpf.length;
    if (!regex.test(key) || tamanho == 11) {
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
    if (!regex.test(key) || tamanho == 11) {
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
  
}




