import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatoComponent } from './components/contato/contato.component';
import { HomeComponent } from "./components/home/home.component";
import { PaginaProdutoComponent } from './components/pagina-produto/pagina-produto.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ProdutosGeralComponent } from './components/produtos-geral/produtos-geral.component';





@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    HomeComponent,
    PaginaProdutoComponent,
    FooterComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







