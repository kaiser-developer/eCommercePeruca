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
import { FormaEnvioComponent } from './component/checkout/forma-envio/forma-envio.component';
import { CarrinhoComponent } from './component/checkout/carrinho/carrinho.component';
import { StorageService } from './services/storage.service';
import { HttpClientModule } from '@angular/common/http';
import { QuemSomosComponent } from './component/quem-somos/quem-somos.component';
import { ProdutosGeralComponent } from './component/produtos-geral/produtos-geral.component';





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
    EnderecoComponent,
    FormaEnvioComponent,
    CarrinhoComponent,
    QuemSomosComponent,
    ProdutosGeralComponent
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







