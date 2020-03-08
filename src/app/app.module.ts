import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';
import { DadosPagamentoComponent } from './components/checkout/dados-pagamento/dados-pagamento.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavCheckoutComponent } from './components/checkout/nav-checkout/nav-checkout.component';
import { CadastroEnderecoComponent } from './components/cadastro-endereco/cadastro-endereco.component';
import { EnderecoComponent } from './components/checkout/endereco/endereco.component';
import { FormaEnvioComponent } from './components/checkout/forma-envio/forma-envio.component';
import { CarrinhoComponent } from './components/checkout/carrinho/carrinho.component';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CheckoutComponent,
    DadosPagamentoComponent,
    NavCheckoutComponent,
    CadastroEnderecoComponent,
    EnderecoComponent,
    FormaEnvioComponent,
    CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    HttpClientModule,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }