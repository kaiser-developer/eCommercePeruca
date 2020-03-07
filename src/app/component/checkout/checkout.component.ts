import { Component, OnInit, ViewChild, TemplateRef  } from '@angular/core';
import { ModalEnderecoComponent } from '../modal-endereco/modal-endereco.component';
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
      new Endereco("12345678", "teste1", 10, "teste1", "teste1", "teste1"),
      new Endereco("12345678", "teste2", 10, "teste2", "teste2", "teste2"),
      new Endereco("12345678", "teste3", 10, "teste3", "teste3", "teste3"),
      new Endereco("12345678", "teste4", 10, "teste4", "teste4", "teste4"),
      new Endereco("12345678", "teste5", 10, "teste5", "teste5", "teste5"),
      new Endereco("12345678", "teste6", 10, "teste6", "teste6", "teste6")
    )
    this.enderecoPrincipal = this.enderecos[0];
    console.log(this.enderecoPrincipal)
  }

  @ViewChild('modal') modal: ModalEnderecoComponent;

  ngOnInit(): void {
  }

  abrirModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template)
  }
  
}
