import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RequisicoesService } from "../../services/requisicoes.service";
import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  formLogin;
  email: string;
  senha: string;
  nome: string;
  logado: boolean;
  carrinho;
  qtdCarrinho: number = 0;

  @Output() atualizar = this.atualizarCarrinho();

  constructor(private fb: FormBuilder, private requisicoes: RequisicoesService, private route: Router, private storage: StorageService) {
    this.carrinho = storage.recuperarCarrinho();
    if (this.carrinho != null) {
      this.qtdCarrinho = this.carrinho.length;
    }
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: [this.email],
      senha: [this.senha]
    });

    this.verificar();
  }

  verificar() {
    if (this.storage.recuperarUsuario() == null) {
      this.logado = false;
      this.nome = "";
    } else {
      this.logado = true;
      this.nome = this.storage.nomeCliente();
    }
  }

  login() {
    if (this.formLogin.status != "INVALID") {
      this.requisicoes.realizarLogin(this.formLogin.value).subscribe(
        data => {
          if (data != null) {
            this.storage.salvarUsuario(data);
            this.verificar();
            alert("Login efetuado com sucesso")
            this.formLogin.reset();
            this.formLogin.value.senha = "";
          } else {
            alert("Usuario e/ou senha inválidos");
          }
        }
      )
    } else {
      alert("Campos invalidos, verifique os campos e tente novamente");
    }
  }

  deslogarCliente() {
    this.storage.removerUsuario();
    this.storage.removerCarrinho();
    this.logado = false;
    this.route.navigate(['/login']);
  }

  atualizarCarrinho() {
    console.log("TESTE")
    this.carrinho = this.storage.recuperarCarrinho();
    if (this.carrinho != null) {
      this.qtdCarrinho = this.carrinho.length;
    }
  }
}
