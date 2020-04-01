import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/model/compra';
import { RequisicoesService } from 'src/app/services/requisicoes.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  pedidos: Compra[] = [];
  formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };

  constructor(private requisicoes: RequisicoesService) { 
    requisicoes.getPedidos().subscribe(
      dados => {
        this.pedidos = dados;
      },
      error =>{
        alert("Erro ao acessar pedidos");
      }
    )
  }

  ngOnInit(): void {
  }

  dataEntrega(pedido: Compra){
    let dataEntrega = new Date(pedido.dtPedido);
    if(pedido.vlFrete == 10)
      dataEntrega.setDate(dataEntrega.getDate() + 15);
    if(pedido.vlFrete == 20)
      dataEntrega.setDate(dataEntrega.getDate() + 7);
    if(pedido.vlFrete == 30)
      dataEntrega.setDate(dataEntrega.getDate() + 3);
    return dataEntrega;
  }
}
