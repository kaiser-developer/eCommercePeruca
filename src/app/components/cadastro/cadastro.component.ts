import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, Form, FormControl } from "@angular/forms";
import { Cliente } from 'src/app/model/cliente';
import { Validacoes } from 'src/app/model/validacoes';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formCliente: FormGroup;
  validacoes: Validacoes;
  segundaSenha: string ="";

  
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(){ this.createForm(new Cliente());}
  
    createForm(cliente: Cliente){
    this.formCliente = this.formBuilder.group({
      nome: [cliente.nome],
      cpf: [cliente.nome],
      tel: [cliente.nome],
      email: [cliente.nome],
      senha: [cliente.nome]
    });
  }
  
  onSubmit() {

    console.log(this.formCliente.value);
    this.formCliente.reset(new Cliente());
  }
  permitirNumeros(evento: any){
    this.validacoes.cancelarLetras(evento);
  }
  permitirLetras(evento: any){
    this.validacoes.cancelarNumeros(evento);
  }
  validacaoCpf(evento: any){
    this.validacoes.validarCpf(evento);
  }
  verificarSenhasIguais(){
    if (this.segundaSenha == this.formCliente.value.senha) {
      console.log("senhas iguais");
    }
    else{
      ("Senhas erradas")
    }
  }
}




