import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { MyFilterPipe } from './filter.pipe';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from './components/footer/footer.component';
import { ProdutosGeralComponent } from './components/produtos-geral/produtos-geral.component';
import { GruposComponent } from './components/produtos-geral/grupos/grupos.component';
import { ListaProdutosComponent } from './components/produtos-geral/lista-produtos/lista-produtos.component';
import { ProdutoComponent } from './components/produtos-geral/produto/produto.component';
import { CarrosselComponent } from './components/home/carrossel/carrossel.component';
import { InstitucionalComponent } from './components/home/institucional/institucional.component';
import { HeaderComponent } from './components/header/header.component';
import { MaisVendidosComponent } from './components/home/mais-vendidos/mais-vendidos.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProdutosGeralComponent,
    MyFilterPipe,
    GruposComponent,
    ListaProdutosComponent,
    ProdutoComponent,
    CarrosselComponent,
    InstitucionalComponent,
    HeaderComponent,
    MaisVendidosComponent
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







