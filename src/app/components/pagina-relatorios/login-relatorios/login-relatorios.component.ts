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

  constructor() { }

  ngOnInit(): void {}

}
