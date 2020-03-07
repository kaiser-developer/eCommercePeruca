import { Component, OnInit, ViewChild, TemplateRef  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Endereco } from 'src/app/model/endereco';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  modalRef: BsModalRef;
  enderecos: Endereco[] = [];
  enderecoPrincipal: Endereco;

  constructor(private modalService: BsModalService) { 
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
  }

  ngOnInit(): void {
  }

  abrirModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template)
  }

  cadastrarEndereco(endereco: Endereco){
    if(endereco.bairro.replace(/\ /g, '').length < 10 || endereco.cep.replace(/\ /g, '').length != 8 ||
      endereco.destinatario.replace(/\ /g, '').length < 10 || endereco.localidade.replace(/\ /g, '').length < 10 ||
      (endereco.numero == 0 || endereco.numero == undefined) || endereco.logradouro.replace(/\ /g, '').length < 6 ||
      endereco.uf == ""){
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
}
