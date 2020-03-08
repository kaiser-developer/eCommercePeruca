import { Component, OnInit, TemplateRef  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Endereco } from 'src/app/model/endereco';
import { Validacoes } from 'src/app/model/validacoes';
import { StorageService } from 'src/app/services/storage.service';
import { Carrinho } from 'src/app/model/carrinho';
import { Produtos } from 'src/app/model/Produtos';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  modalRef: BsModalRef;
  enderecos: Endereco[] = [];
  enderecoPrincipal: Endereco = null;
  validacoes: Validacoes;
  formaEnvio: number = 0;

  constructor(private modalService: BsModalService, private storage: StorageService) { 
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
    let carrinho: Carrinho[] = [];
    carrinho.push(
      new Carrinho(new Produtos("Peruca 1", 33.33), 2),
      new Carrinho(new Produtos("Peruca 2", 66.66), 2),
      new Carrinho(new Produtos("Peruca 3", 99.99), 2)
    )
    this.storage.salvarCarrinho(carrinho);
  }

  ngOnInit(): void {
  }

  abrirModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template)
  }

  receberFormaDeEnvio(envio){
    this.formaEnvio = envio;
    console.log(this.formaEnvio);
  }

  cadastrarEndereco(endereco: Endereco){
    if(this.validacoes.verificarEndereco(Endereco)){
      return alert("Dados não preenchidos corretamente");
    }    
    this.enderecos.push(endereco);
    if(this.enderecos.length == 1){
      this.enderecoPrincipal = this.enderecos[0]
    }
    this.modalRef.hide();
  }

  mudarEndereco(endereco: Endereco){
    this.enderecoPrincipal = endereco;
    this.modalRef.hide();
  }

  finalizarCompra(dadosPagamento){
    if(this.enderecoPrincipal != null && dadosPagamento && this.formaEnvio != 0){
      console.log("Compra finalizada");
    }else{
      console.log("Preencha todos os dados corretamente")
    }
  }
}
