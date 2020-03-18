import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatoComponent } from './components/contato/contato.component';
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
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { QuemSomosComponent } from "./components/quem-somos/quem-somos.component";
import { ConteudoComponent } from "./components/quem-somos/conteudo/conteudo.component";
import { DescricaoComponent } from "./components/quem-somos/descricao/descricao.component";
import { ModalComponent } from "./components/quem-somos/modal/modal.component";
import { NavbarComponent } from "./components/quem-somos/navbar/navbar.component";
import { SobreComponent } from "./components/quem-somos/sobre/sobre.component";
import { PaginaProdutoComponent } from "./components/pagina-produto/pagina-produto.component";
import { CarrosselComponent } from "./components/pagina-produto/carrossel/carrossel.component";
import { ComprarComponent } from "./components/pagina-produto/comprar/comprar.component";
import { HomeComponent } from "./components/home/home.component";
import { CarroselHomeComponent } from "./components/home/carrosel-home/carrosel-home.component";
import { InstitucionalComponent } from "./components/home/institucional/institucional.component";
import { MaisVendidosComponent } from "./components/home/mais-vendidos/mais-vendidos.component";
import { PaginaCarrinhoComponent } from './components/pagina-carrinho/pagina-carrinho.component';
import { CardComponent } from './components/pagina-carrinho/card/card.component';
import { CompraFinalizadaComponent } from './components/compra-finalizada/compra-finalizada.component';
import { CentroComponent } from './components/compra-finalizada/centro/centro.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ProdutoComponent } from './components/catalogo/produto/produto.component';
import { CategoriaComponent } from './components/catalogo/categoria/categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarroselHomeComponent,
    InstitucionalComponent,
    MaisVendidosComponent,
    PaginaProdutoComponent,
    CarrosselComponent,
    ComprarComponent,
    DescricaoComponent,
    ModalComponent,
    NavbarComponent,
    SobreComponent,
    LoginComponent,
    ContatoComponent,
    CheckoutComponent,
    DadosPagamentoComponent,
    NavCheckoutComponent,
    CadastroEnderecoComponent,
    EnderecoComponent,
    FormaEnvioComponent,
    CarrinhoComponent,
    CadastroComponent,
    FooterComponent,
    HeaderComponent,
    QuemSomosComponent,
    ConteudoComponent,
    PaginaCarrinhoComponent,
    CardComponent,
    CompraFinalizadaComponent,
    CentroComponent,
    CatalogoComponent,
    ProdutoComponent,
    CategoriaComponent
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
