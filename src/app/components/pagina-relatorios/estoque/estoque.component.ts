import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Produto } from 'src/app/model/produto';
import { Validacoes } from 'src/app/model/validacoes';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Categoria } from 'src/app/model/categoria';
import { StorageService } from 'src/app/services/storage.service';
import { ProdutoApi } from 'src/app/model/produto-api';


@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  formCadProd: FormGroup;
  validacoes: Validacoes = new Validacoes();
  produto: Produto;
  produtos: Produto[];
  categorias: Categoria[];
  imagensUpload: File[] = [];
  @ViewChild("imagem")
  inputImagem: ElementRef;

  constructor(private formBuilder: FormBuilder, private cadastro: CadastrosService, private requisicoes: RequisicoesService, private storage: StorageService) {
    this.requisicoes.getCategoria().subscribe(
      data => {
        this.categorias = data; 
      }
    )
    this.requisicoes.getProdutos().subscribe(
      data => {
        this.produtos = data;
      }
    )
  }

  ngOnInit(): void { this.createForm(new ProdutoApi)}
    createForm(produto: ProdutoApi){
      this.formCadProd = this.formBuilder.group({
        descProduto: [produto.descProduto],
        categoria: [produto.categoria],
        qtdProduto: [produto.qtdProduto],
        valorProduto: [produto.valorProduto]
      });
    }
  permitirNumeros(){
    this.validacoes.cancelarLetras;
  }
  permitirLetras(){
    this.validacoes.cancelarNumeros;
  }
 
  onSubmit(){ 
    if(this.formCadProd.value != null && this.formCadProd.value.descProduto != null){
      this.cadastro.cadastrarProduto(this.formCadProd.value, []).subscribe(
        data => data
        ) 
        alert("Produto cadastrado com sucesso")
        this.formCadProd.reset();
      }else{
        alert("Erro ao cadastrar pedido")
      } 
    
  }   
  handleFileInput(files: FileList) {
    for(let index = 0; index < files.length; index ++){
      if(this.imagensUpload.length == 5){
        this.inputImagem.nativeElement.value = "";
        return alert("Só é possivel adicionar 5 imagens")
      }
      this.imagensUpload.push(files.item(index))
    }
    this.inputImagem.nativeElement.value = "";
    alert("Imagem adicionada");
  }
}
