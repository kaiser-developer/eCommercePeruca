import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso-pedido',
  templateUrl: './progresso-pedido.component.html',
  styleUrls: ['./progresso-pedido.component.css']
})
export class ProgressoPedidoComponent implements OnInit {

  @Input() status;
  statusAtual: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.status.cod_status == 1 ? this.statusAtual.push(true) : false;
    this.status.cod_status == 2 ? this.statusAtual.push(true) : false;
    this.status.cod_status == 4 ? this.statusAtual.push(true) : false;
    this.status.cod_status == 5 ? this.statusAtual.push(true) : false;
  }

}
