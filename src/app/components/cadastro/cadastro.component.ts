import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Cliente } from 'src/app/model/cliente';
import { Validacoes } from 'src/app/model/validacoes';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formCliente: FormGroup;
  validacoes: Validacoes = new Validacoes();

  
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(){ this.createForm(new Cliente());}
  
    createForm(cliente: Cliente){
    this.formCliente = this.formBuilder.group({
      nome: [cliente.nome],
      cpf: [cliente.nome],
      tel: [cliente.nome],
      email: [cliente.nome],
      senha: [cliente.nome],
      segundaSenha: ''
    });
  }
  
  onSubmit() {
    console.log(this.formCliente.value);
    this.verificarSenhasIguais();
  }
  permitirNumeros(evento: any){
    this.validacoes.cancelarLetras(evento);
  }

  permitirLetras(evento: any){
    this.validacoes.cancelarNumeros(evento);
  }
  
  verificarSenhasIguais(){
    if (this.formCliente.value.segundaSenha == this.formCliente.value.senha) {
      console.log("senhas iguais");
    }
    else{
      console.log("Senhas erradas")
    }
  }
}




