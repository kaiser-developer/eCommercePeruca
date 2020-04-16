import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { Compra } from 'src/app/model/compra';
import { Cupom } from 'src/app/model/cupom';
import { RequisicoesService } from 'src/app/services/requisicoes.service';


@Component({
  selector: 'app-resumo-dashboard',
  templateUrl: './resumo-dashboard.component.html',
  styleUrls: ['./resumo-dashboard.component.css']
})
export class ResumoDashboardComponent implements OnInit {

  dataProd: any;
  dataPed: any;
  dataCupons: any;
  produtos : Produto[] = [];
  pedido : Compra[] = [];
  cupons : Cupom[] = [];

  constructor(requisicoes: RequisicoesService) {
    requisicoes.getCupons().subscribe(
      data => {
        this.cupons = data;  
      }
     )

    requisicoes.getProdutos().subscribe(
      data => {
        this.produtos = data;
      }
    )

    requisicoes.getPedidos().subscribe(
      data => {
        this.pedido = data;
      }
    )

      this.dataProd = {
        labels: ['Cadastrados', 'Vendidos', 'Em Falta'],
        datasets: [
          {
            label: 'Resumo: Produtos',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            data: [32,20,24]
          }
        ]
      }
    
    
      this.dataPed = {
        labels: ['Feitos', 'Concluídos', 'Cancelados'],
        datasets: [
          {
            label: 'Resumo: Pedidos',
            backgroundColor: '#6f42c1',
            borderColor: '#1E88E5',
            data: [231,312,270]
          }
        ]
      }
    
    
      this.dataCupons = {
        labels: ['Cadastrados', 'Ativos', 'Usos'],
        datasets: [
          {
            label: 'Resumo: Cupons',
            backgroundColor: '#28a745',
            borderColor: '#1E88E5',
            data: [6,4,3]
          }
        ]
      }
    
}

  ngOnInit(): void {
  }

}
