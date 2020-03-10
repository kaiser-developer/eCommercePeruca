import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DadosPagamentoComponent } from './components/checkout/dados-pagamento/dados-pagamento.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavCheckoutComponent } from './components/checkout/nav-checkout/nav-checkout.component';
import { CadastroEnderecoComponent } from './components/cadastro-endereco/cadastro-endereco.component';
import { EnderecoComponent } from './components/checkout/endereco/endereco.component';
import { FormaEnvioComponent } from './components/checkout/forma-envio/forma-envio.component';
import { CarrinhoComponent } from './components/checkout/carrinho/carrinho.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ModalComponent } from './components/quem-somos/modal/modal.component';
import { NavbarComponent } from './components/quem-somos/navbar/navbar.component';
import { DescricaoComponent } from './components/quem-somos/descricao/descricao.component';
import { SobreComponent } from './components/quem-somos/sobre/sobre.component';
import { ConteudoComponent } from './components/quem-somos/conteudo/conteudo.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    CheckoutComponent,
    DadosPagamentoComponent,
    NavCheckoutComponent,
    CadastroEnderecoComponent,
    EnderecoComponent,
    FormaEnvioComponent,
    CarrinhoComponent,
    CadastroComponent,
    QuemSomosComponent,
    ModalComponent,
    NavbarComponent,
    DescricaoComponent,
    SobreComponent,
    ConteudoComponent
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
