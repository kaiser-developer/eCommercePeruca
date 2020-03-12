import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Login } from "../../model/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: Login = new Login("gabriel@gmail.com", "12345678");
  formLogin;
  email: string;
  password: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: [this.email],
      password: [this.password]
    });
  }

  login() {

    if (this.formLogin.status != "INVALID") {

      if (this.formLogin.value.email == this.user.email && this.formLogin.value.password == this.user.senha) {

        alert("Efetuado login!");

      } else {
        alert("Usuario não cadastrado!");
      }
    } else {
      alert("campos Invalidos");
    }
  }
}