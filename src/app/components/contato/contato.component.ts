import { Component, OnInit } from '@angular/core';
import { Validacoes } from 'src/app/model/validacoes';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import { FaleConosco } from 'src/app/model/faleConosco';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {
  formFaleConosco: FormGroup;
  validacoes: Validacoes = new Validacoes;
  


  constructor(private formBuilder: FormBuilder, private cadastro: CadastrosService, private storage: StorageService) { }

  ngOnInit(): void {
    this.createForm(new FaleConosco());
     }
   
   createForm(faleConosco: FaleConosco){
     this.formFaleConosco = this.formBuilder.group({
       nomeCompleto: [faleConosco.nomeCompleto],
       telefone: [faleConosco.telefone],
       email: [faleConosco.email],
       mensagem: [faleConosco.mensagem],
       assuntoMensagem: [faleConosco.assuntoMensagem],      
     })
   }

    onSubmit(){
      this.cadastro.faleConosco(this.formFaleConosco.value).subscribe(
        data => {this.formFaleConosco = data;
        })
      this.createForm(new FaleConosco());

    }

    permitirLetrasCont(evento: any) {
      this.validacoes.cancelarNumeros(evento);
    }
    permitirNumerosCont(evento: any){
      this.validacoes.cancelarLetras(evento);
    }  
}