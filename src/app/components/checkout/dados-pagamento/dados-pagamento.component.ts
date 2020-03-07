import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dados-pagamento',
  templateUrl: './dados-pagamento.component.html',
  styleUrls: ['./dados-pagamento.component.css']
})
export class DadosPagamentoComponent implements OnInit {

  @Output() botaoFinalizarClicado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
