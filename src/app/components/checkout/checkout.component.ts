import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalBackdropComponent } from 'ngx-bootstrap/modal';
import { Endereco } from 'src/app/model/endereco';
import { Validacoes } from 'src/app/model/validacoes';
import { StorageService } from 'src/app/services/storage.service';
import { Carrinho } from 'src/app/model/carrinho';
import { Produto } from 'src/app/model/produto';
import { RequisicoesService } from 'src/app/services/requisicoes.service';
import { CadastrosService } from 'src/app/services/cadastros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  modalRef: BsModalRef;
  enderecos;
  enderecoPrincipal: Endereco = null;
  validacoes: Validacoes = new Validacoes();
  formaEnvio: number = 0;
  total: number = 0;
  dadosDePagamento: boolean = false;
  formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };
  carrinho: Carrinho[];
  user;

  constructor(private requisicoes: RequisicoesService, private modalService: BsModalService, private storage: StorageService, private cadastros: CadastrosService, private route: Router) {

    this.carrinho = this.storage.recuperarCarrinho();
    this.user = this.storage.recuperarUsuario();
    if (this.carrinho != null && this.carrinho.length != 0 && this.user != null) {
      this.carrinho.forEach(item => {
        this.total += (item.produto.valorProduto * item.quantidade);

        this.requisicoes.buscarEndereco(this.user.codCliente).subscribe(
          dados => {
            this.enderecos = dados

            if (this.enderecos.length > 0) {
              this.enderecoPrincipal = this.enderecos[0];
            }
          }
        );
      });
    } else {
      this.enderecos = [];
      this.route.navigate(["/home"])
    }

  }

  ngOnInit(): void {
  }

  abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }

  receberFormaDeEnvio(envio) {
    if (envio != this.formaEnvio) {
      this.total -= this.formaEnvio;
      this.formaEnvio = envio;
      this.total += this.formaEnvio;
    }
  }

  cadastrarEndereco(endereco: Endereco) {
    if (this.validacoes.verificarEndereco(endereco)) {
      alert("Dados não preenchidos corretamente");
    } else {
      this.cadastros.cadastrarEndereco(endereco, this.storage.recuperarUsuario().codCliente).subscribe(
        dados => this.enderecos.push(dados)
      )
    }
    this.modalRef.hide();
  }

  mudarEndereco(endereco: Endereco) {
    this.enderecoPrincipal = endereco;
    this.modalRef.hide();
  }

  validarCampos(template: TemplateRef<any>) {
    if (this.enderecoPrincipal != null && this.formaEnvio != 0 && this.storage.recuperarCarrinho().length != 0) {
      this.dadosDePagamento = true
    } else {
      this.abrirModal(template)
    }
  }

  finalizarCompra(valido, template: TemplateRef<any>) {
    if (valido) {
      this.cadastros.cadastrarCompra(this.enderecoPrincipal, this.formaEnvio, this.total).subscribe(
        dados => {
          if (dados != null) {
            this.storage.removerCarrinho();
            this.route.navigate(['/finalizar-compra'])
          }
        }
      )
    } else {
      this.dadosDePagamento = false;
      this.abrirModal(template);
    }
  }
}
