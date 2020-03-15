import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalRef, BsModalService, ModalBackdropComponent } from 'ngx-bootstrap/modal';
import { Endereco } from 'src/app/model/endereco';
import { Validacoes } from 'src/app/model/validacoes';
import { StorageService } from 'src/app/services/storage.service';
import { Carrinho } from 'src/app/model/carrinho';
import { Produto } from 'src/app/model/produto';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { CadastrosService } from 'src/app/services/cadastros.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  modalRef: BsModalRef;
  enderecos: Endereco[] = [];
  enderecoPrincipal: Endereco = null;
  validacoes: Validacoes = new Validacoes();
  formaEnvio: number = 0;
  total: number = 0;
  dadosDePagamento: boolean = false;
  formato = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' };

  constructor(private modalService: BsModalService, private storage: StorageService, private cadastros: CadastrosService) { 
    this.enderecos.push(
      new Endereco("06810060", "Rua Piloto", 109, "Jardim Castilho", "Embu", "SP", "Cesar"),
      new Endereco("13308133", "Rua Maua", 22, "Cidade Nova I", "Itu", "SP", "Vitor"),
      new Endereco("12345678", "teste4", 10, "teste4", "teste4", "teste4", "Daniel"),
      new Endereco("12345678", "teste5", 10, "teste5", "teste5", "teste5", "Gabriel"),
      new Endereco("12345678", "teste6", 10, "teste6", "teste6", "teste6", "Michelle")
    )
    if(this.enderecos.length > 0){
      this.enderecoPrincipal = this.enderecos[0];
    }

    this.storage.recuperarCarrinho().forEach(item => {
      this.total += (item.produto.valor * item.quantidade);
    });
  }

  ngOnInit(): void {
  }

  abrirModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template)
  }

  receberFormaDeEnvio(envio){
    if(envio != this.formaEnvio){
      this.total -= this.formaEnvio;
      this.formaEnvio = envio;      
      this.total += this.formaEnvio;
    }
  }

  cadastrarEndereco(endereco: Endereco){
    if(this.validacoes.verificarEndereco(endereco)){
      alert("Dados não preenchidos corretamente");
    }else{
      this.cadastros.cadastrarEndereco(endereco);
    }
    this.modalRef.hide();
  }

  mudarEndereco(endereco: Endereco){
    this.enderecoPrincipal = endereco;
    this.modalRef.hide();
  }

  validarCampos(template: TemplateRef<any>){
    if(this.enderecoPrincipal != null && this.formaEnvio != 0 && this.storage.recuperarCarrinho().length != 0){
      this.dadosDePagamento = true
    }else {
      this.abrirModal(template)
    }
  }

  finalizarCompra(valido, template: TemplateRef<any>){
    if(valido){
      this.cadastros.cadastrarCompra(this.enderecoPrincipal, this.formaEnvio)
    }else{
      this.dadosDePagamento = false;
      this.abrirModal(template);
    }
  }
}
