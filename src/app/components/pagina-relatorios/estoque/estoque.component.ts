import { Component, OnInit, TemplateRef } from '@angular/core';
import { Cupom } from "src/app/model/cupom";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RequisicoesService } from "src/app/services/requisicoes.service";


@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  cupons: Cupom[] = [];
  modalRef: BsModalRef;
  checked: boolean;

  constructor(private modalService: BsModalService, private requisicoes: RequisicoesService) {

    this.requisicoes.todosCupons().subscribe(
      data => {
        this.cupons = data;
      }
    )
  }

  ngOnInit(): void {
  }


  abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ativarCupom(cupom: Cupom) {
    this.requisicoes.atualizarCupom(cupom.codCupom, cupom).subscribe(
      cupomApi => {
        alert("Cupom alterado com sucesso!");
      }, error => {
        alert("Erro ao alterar cupom!");
      }
    )
  }
}
