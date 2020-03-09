import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl,  } from '@angular/forms';
import { DadosPagamento } from 'src/app/model/dados-pagamento';
import { Validacoes } from 'src/app/model/validacoes';

@Component({
  selector: 'app-dados-pagamento',
  templateUrl: './dados-pagamento.component.html',
  styleUrls: ['./dados-pagamento.component.css']
})
export class DadosPagamentoComponent implements OnInit {

  @Output() botaoFinalizarClicado = new EventEmitter();
  dataAtual: Date = new Date();
  data: string;
  formPagamento: FormGroup;
  validacoes: Validacoes;

  private createForm(dadosPagamento: DadosPagamento): FormGroup {
    return new FormGroup({
      numeroCartao: new FormControl(dadosPagamento.numeroCartao),
      dataValidade: new FormControl(dadosPagamento.dataValidade),
      cvv: new FormControl(dadosPagamento.cvv),
      nomeTitular: new FormControl(dadosPagamento.nomeTitular),
      cpf: new FormControl(dadosPagamento.cpf)
    })
  }

  constructor() {
    this.validacoes = new Validacoes();
    this.data = `${this.dataAtual.getFullYear()}-`;
    this.data += this.dataAtual.getMonth() < 9 ? `0${(this.dataAtual.getMonth() + 1)}` : `${(this.dataAtual.getMonth() + 1)}`
    this.formPagamento = this.createForm(new DadosPagamento("", "", "", "", ""))
  }

  ngOnInit(): void {
  }

  permitirNumeros(evento: any){
    this.validacoes.cancelarLetras(evento);
  }

  permitirLetras(evento: any){
    this.validacoes.cancelarNumeros(evento)
  }

  validarPagamento(): boolean{
    return this.validacoes.verificarDadosPagamento(this.formPagamento.value);
  }
}
