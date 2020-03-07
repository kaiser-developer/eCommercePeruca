import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatoComponent } from './component/contato/contato.component';
import { HomeComponent } from "./component/home/home.component";
import { PaginaProdutoComponent } from './component/pagina-produto/pagina-produto.component';
import { FooterComponent } from './component/footer/footer.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { DadosEntregaComponent } from './component/checkout/dados-entrega/dados-entrega.component';
import { DadosPagamentoComponent } from './component/checkout/dados-pagamento/dados-pagamento.component';
import { ModalEnderecoComponent } from './component/modal-endereco/modal-endereco.component';
import { NavCheckoutComponent } from './component/checkout/nav-checkout/nav-checkout.component';
import { CadastroEnderecoComponent } from './component/cadastro-endereco/cadastro-endereco.component';
import { EnderecoComponent } from './component/endereco/endereco.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent,
    PaginaProdutoComponent,
    FooterComponent,
    CheckoutComponent,
    DadosEntregaComponent,
    DadosPagamentoComponent,
    ModalEnderecoComponent,
    NavCheckoutComponent,
    CadastroEnderecoComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







