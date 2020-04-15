import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Produto } from 'src/app/model/produto';
import { Validacoes } from 'src/app/model/validacoes';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { Categoria } from 'src/app/model/categoria';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  formCadProd: FormGroup;
  validacoes: Validacoes = new Validacoes();
  imagensUpload: File[] = [];
  @ViewChild("imagem")
  inputImagem: ElementRef;

  constructor(private formBuilder: FormBuilder, private cadastro: CadastrosService, private requisicoes: RequisicoesService, private storage: StorageService) { }

  ngOnInit(): void { this.createForm(new Produto)}
    createForm(produto: Produto){
      this.formCadProd = this.formBuilder.group({
        codigo: [produto.codProduto],
        descricao: [produto.categoria],
        valor: [produto.valorProduto],
        imagens:[produto.imagens],
        categoria: [produto.categoria]
      });
    }
  permitirNumeros(){
    this.validacoes.cancelarLetras;
  }
  permitirLetras(){
    this.validacoes.cancelarNumeros;
  }
  onSubmit(){
    this.cadastro.cadastrarProduto(this.formCadProd.value, this.imagensUpload).subscribe(
      data => {
          data = this.formCadProd.value;
          alert("Produto cadastrado com sucesso");
        }
    )
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
