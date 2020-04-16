import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Validacoes } from 'src/app/model/validacoes';
import { FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/model/categoria';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css'],
  providers: [MessageService]
})
export class EstoqueComponent implements OnInit {
  formCadProd: FormGroup;
  validacoes: Validacoes = new Validacoes();
  produto: Produto;
  categorias: Categoria[];
  imagensUpload: File[] = [];
  @ViewChild("imagem")
  inputImagem: ElementRef;
  formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' };

  produtos: any[] = [];
  first: number = 0;
  cols: any[];
  display: boolean = false;
  produtoEditar: Produto;
  modalRef: BsModalRef;
  displayDialog: boolean;

  constructor(private requisicoes: RequisicoesService,
    private modalService: BsModalService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.requisicoes.getProdutos().subscribe(
      data => {
        this.produtos = data
      }
    )

    this.cols = [
      { field: 'imagem', header: 'Produto' },
      { field: 'codProduto', header: 'Código' },
      { field: 'descricao', header: 'Nome' },
      { field: 'valorProduto', header: 'Preço' },
      { field: 'categoria', header: 'Categoria' },
      { field: 'qtdProduto', header: 'Quantidade' }
    ];
  }

  abrirModal(template: TemplateRef<any>, produto: Produto) {
    this.produtoEditar = produto;
    console.log(this.produtoEditar);
    this.modalRef = this.modalService.show(template)
  }

  showDialogToAdd() {
    this.displayDialog = true;
  }

  receberProduto(produto){
    this.produtos.push(produto);
    this.displayDialog = false;
    this.showSuccess();
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Cadastro realizado', detail: 'O produto foi cadastrado com sucesso.' });
  }
}
