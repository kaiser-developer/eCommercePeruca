import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { MyFilterPipe } from './filter.pipe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from "./components/home/home.component";
import { PaginaProdutoComponent } from './components/pagina-produto/pagina-produto.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ProdutosGeralComponent } from './components/produtos-geral/produtos-geral.component';
import { GruposComponent } from './components/produtos-geral/grupos/grupos.component';
import { ListaProdutosComponent } from './components/produtos-geral/lista-produtos/lista-produtos.component';
import { ProdutoComponent } from './components/produtos-geral/produto/produto.component';






@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent,
    PaginaProdutoComponent,
    FooterComponent,
    QuemSomosComponent,
    ProdutosGeralComponent,
    MyFilterPipe,
    GruposComponent,
    ListaProdutosComponent,
    ProdutoComponent
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







