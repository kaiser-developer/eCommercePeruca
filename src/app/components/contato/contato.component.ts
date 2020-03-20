import { Component, OnInit } from '@angular/core';
import { Validacoes } from 'src/app/model/validacoes';
import { ReactiveFormsModule } from "@angular/forms";
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import { Contato } from '../../model/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {
  formContato: FormGroup;
  validacoes: Validacoes = new Validacoes;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm(new Contato());
   }
   createForm(contato: Contato){
     this.formContato = this.formBuilder.group({
       nome: [contato.nome],
       telefone: [contato.telefone],
       email: [contato.email],
       msg: [contato.msg]
     })
   }
    onSubmit(){
      this.createForm(new Contato());
    }

    permitirLetrasCont(evento: any) {
      this.validacoes.cancelarNumeros(evento);
    }
    permitirNumerosCont(evento: any){
      this.validacoes.cancelarLetras(evento);
    }  
}