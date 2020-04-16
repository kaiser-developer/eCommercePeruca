import { Component, OnInit } from '@angular/core';
import { Cupom } from 'src/app/model/cupom';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.component.html',
  styleUrls: ['./cupons.component.css'],
  providers: [MessageService]
})
export class CuponsComponent implements OnInit {

  cupons: Cupom[] = [];
  modalRef: BsModalRef;
  checked: boolean;
  cols: any[];
  cupom: Cupom;
  displayDialog: boolean;
  formCupom: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private requisicoes: RequisicoesService,
    private cadastro: CadastrosService,
    private messageService: MessageService) {

    this.requisicoes.todosCupons().subscribe(
      data => {
        this.cupons = data;
      }
    )
  }

  ngOnInit(): void { this.createForm(new Cupom(null, null, "", null)); }

  createForm(cupom: Cupom) {
    this.formCupom = this.formBuilder.group({
      nome: [cupom.nome],
      desconto: [cupom.desconto]
    });
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

  onRowSelect(event) {

  }

  showDialogToAdd() {
    this.cupom = new Cupom(null, null, null, null);
    this.displayDialog = true;

  }

  cadastrarCupom() {
    this.cadastro.addCupom(this.cupom).subscribe(
      cupom => {
        this.cupons.push(cupom);
        this.showSuccess();
        this.displayDialog = false;

      }
    )
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'O cupom foi cadastrado com sucesso.' });
  }


}
