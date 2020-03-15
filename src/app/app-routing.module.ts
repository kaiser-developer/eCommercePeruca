import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './components/login/login.component'
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ContatoComponent } from "./components/contato/contato.component";
import { QuemSomosComponent } from "./components/quem-somos/quem-somos.component";
import { PaginaProdutoComponent } from "./components/pagina-produto/pagina-produto.component";
import { HomeComponent } from './components/home/home.component';
import { ProdutosGeralComponent } from './components/produtos-geral/produtos-geral.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'checkout', component: CheckoutComponent},
  { path: "produtos" , component:ProdutosGeralComponent},
  { path: 'login', component: LoginComponent },
  { path: 'cadastre-se', component: CadastroComponent},
  { path: 'contato', component: ContatoComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'produto/:id', component: PaginaProdutoComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
