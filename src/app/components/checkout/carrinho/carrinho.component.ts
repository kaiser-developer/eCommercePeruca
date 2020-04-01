import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Carrinho } from 'src/app/model/carrinho';
import { Cupom } from 'src/app/model/cupom';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RequisicoesService } from 'src/app/services/requisicoes.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho[] = [];
  subTotal: number = 0;
  cupomAtivo: Cupom = null;
  cupons: Cupom[] = [];
  descontos: number[] = [];
  valorCupom: number = 0;
  formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' };
  @Input() frete: number = 0;
  modalRef: BsModalRef;
  @Output() enviarCupom = new EventEmitter;

  constructor(private storage: StorageService, private modalService: BsModalService, private requisicoes: RequisicoesService) { 
    this.carrinho = this.storage.recuperarCarrinho();
    if(this.carrinho != null){
      this.carrinho.forEach(item => {
        this.subTotal += item.quantidade * item.produto.valorProduto;
      })
    }else{
      this.carrinho = [];
    }
    
    this.requisicoes.getCupons().subscribe(
      data => {
        this.cupons = data;
      }
    )
  }

  ngOnInit(): void {
  }

  abrirModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  adicionarCupom(cupom){
    this.cupomAtivo = cupom;
  }

  mandarCupom(cupom){
    this.modalRef.hide();
    this.enviarCupom.emit(cupom);
  }

  ativarCupom(event){
    
  }
}
