import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  private createForm(): FormGroup{
    return new FormGroup({
      
    })
  }

  constructor() {
    this.data = `${this.dataAtual.getFullYear()}-`;
    this.data += this.dataAtual.getMonth() < 9 ? `0${(this.dataAtual.getMonth() + 1)}` : `${(this.dataAtual.getMonth() + 1)}`
  }

  ngOnInit(): void {
  }

}
