import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { CheckoutComponent } from './components/checkout/checkout.component';
import { DadosPagamentoComponent } from './components/checkout/dados-pagamento/dados-pagamento.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavCheckoutComponent } from './components/checkout/nav-checkout/nav-checkout.component';
import { CadastroEnderecoComponent } from './components/cadastro-endereco/cadastro-endereco.component';
import { EnderecoComponent } from './components/checkout/endereco/endereco.component';
import { FormaEnvioComponent } from './components/checkout/forma-envio/forma-envio.component';
import { CarrinhoComponent } from './components/checkout/carrinho/carrinho.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CheckoutComponent,
    DadosPagamentoComponent,
    NavCheckoutComponent,
    CadastroEnderecoComponent,
    EnderecoComponent,
    FormaEnvioComponent,
    CarrinhoComponent,
    CadastroComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
