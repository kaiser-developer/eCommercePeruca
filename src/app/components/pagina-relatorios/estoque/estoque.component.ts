import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Validacoes } from 'src/app/model/validacoes';
import { FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  formCadProd: FormGroup;
  validacoes: Validacoes = new Validacoes();
  produto: Produto;
  categorias: Categoria[];
  imagensUpload: File[] = [];
  @ViewChild("imagem")
  inputImagem: ElementRef;

  produtos: any[] = [];
  first: number = 0;
  cols: any[];
  display: boolean = false;
  produtoEditar: Produto;
  modalRef: BsModalRef;

  constructor(private requisicoes: RequisicoesService,
    private modalService: BsModalService) { }

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
}
