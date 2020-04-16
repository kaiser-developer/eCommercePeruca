import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login-relatorios',
  templateUrl: './login-relatorios.component.html',
  styleUrls: ['./login-relatorios.component.css']
})
export class LoginRelatoriosComponent implements OnInit {

  formLoginFunc;
  matricula: string;
  senha: string;

  constructor(private formbuilder: FormBuilder,
    private requisicoes: RequisicoesService,
    private route: Router,
    private storage: StorageService) { }

  ngOnInit(): void {
    this.formLoginFunc = this.formbuilder.group({
      matricula:[this.matricula],
      senha:[this.senha]
    })

    if(this.storage.recuperarUsuario() != null){
      this.route.navigate(["login-relatorio"]);
    }
  }

  login() {
    if (this.formLoginFunc.status != "INVALID") {
      this.requisicoes.realizarLogin(this.formLoginFunc.value).subscribe(
        data => {
          this.storage.salvarUsuario(data);
          this.route.navigate(["pg-relatorios"])
        },
        error => {
          alert("Usuario e/ou senha inválidos");
        }
      )
    } else {
      alert("Campos invalidos, verifique os campos e tente novamente");
    }
  }

}
