import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Locais } from 'src/app/model/locais';
import { DomSanitizer } from '@angular/platform-browser';
import { Validacoes } from 'src/app/model/validacoes';

@Component({
  selector: 'app-checkout-doacao',
  templateUrl: './checkout-doacao.component.html',
  styleUrls: ['./checkout-doacao.component.css']
})
export class CheckoutDoacaoComponent implements AfterViewInit {
  validacoes: Validacoes = new Validacoes();

  @ViewChild('iframe') iframe: ElementRef;

  locais: Locais[] = [new Locais("Instituto do Câncer SP", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58510.38820676956!2d-46.730180115298296!3d-23.57206121657443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce582a2caf4ef9%3A0x4a60c9bac394fb6b!2sInstituto%20do%20C%C3%A2ncer%20do%20Estado%20de%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1585329515376!5m2!1spt-BR!2sbr"),
  new Locais("AACD", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58499.30397043733!2d-46.68674973666297!3d-23.59692605580908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a1f56f181d9%3A0x87896620d3d38475!2sHospital%20AACD!5e0!3m2!1spt-BR!2sbr!4v1585329134212!5m2!1spt-BR!2sbr"),
  new Locais("GRAAC", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1752128990793!2d-46.64445698554201!3d-23.59804836883202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a25488482bb%3A0xd7abb48c53783ee1!2sGRAACC!5e0!3m2!1spt-BR!2sbr!4v1585167738599!5m2!1spt-BR!2sb")];
  escolhido: number = 0;
  localEscolhido;



  constructor(sanitizer: DomSanitizer) { 
    this.localEscolhido = this.locais[this.escolhido];

  }

  ngAfterViewInit(): void {
    this.iframe.nativeElement.setAttribute('src', this.localEscolhido.link);
  }

  mudarLocal(){
    this.localEscolhido = this.locais[this.escolhido];
    this.iframe.nativeElement.setAttribute('src', this.localEscolhido.link);
  }
  
  permitirNumeros(evento: any) {
    this.validacoes.cancelarLetras(evento);
    }

  permitirLetras(evento: any) {
    this.validacoes.cancelarNumeros(evento);
  }




}
