import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Produto } from 'src/app/model/produto';
import { Validacoes } from 'src/app/model/validacoes';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  formCadProd: FormGroup;
  validacoes: Validacoes = new Validacoes();

  constructor(private formBuilder: FormBuilder, private cadastro: CadastrosService, private storage: StorageService) { }

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
    this.cadastro.cadastrarProduto(this.formCadProd.value).subscribe(
      data => {
        this.formCadProd = data;
      }
    )
    console.log(this.formCadProd);
    
  }
  
}
