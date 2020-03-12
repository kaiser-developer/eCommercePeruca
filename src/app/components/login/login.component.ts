import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Login } from "../../model/login";
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formLogin;
  email: string;
  senha: string;
  storage: StorageService = new StorageService();

  constructor(private fb: FormBuilder, private requisicoes: RequisicoesService, private route: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: [this.email],
      senha: [this.senha]
    });
  }

  login() {
    if (this.formLogin.status != "INVALID") {

      if (this.requisicoes.getCliente(this.formLogin.value.email, this.formLogin.value.senha)) {
        this.route.navigate(["/home"])
      } else {
        alert("Usuario não cadastrado!");
      }
    } else {
      alert("campos Invalidos");
    }
  }
}