import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validacoes } from 'src/app/model/validacoes';
import { Route } from '@angular/compiler/src/core';
import { Funcionario } from 'src/app/model/funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  formFunc: FormGroup;
  validacoes: Validacoes = new Validacoes();

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.createFormFunc(new Funcionario());
  }
  createFormFunc(funcionario: Funcionario){
    this.formFunc = this.formBuilder.group({
      nome: [funcionario.nome],
      matricula: [funcionario.matricula],
      senha: [funcionario.senha]
    })
  }
  
  permitirLetrasFunc(evento: any){
    this.validacoes.cancelarNumeros(evento);
  }
  permitirNumerosFunc(evento: any){
    this.validacoes.cancelarLetras(evento);
  }
  

}
