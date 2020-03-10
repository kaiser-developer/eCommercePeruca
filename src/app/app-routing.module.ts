import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './components/login/login.component'
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { PaginaDoProdutoComponent } from "./components/pagina-do-produto/pagina-do-produto.component";

const routes: Routes = [
  { path: '', redirectTo: 'checkout', pathMatch: 'full'},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'cadastre-se', component: CadastroComponent},
  { path: 'produto', component: ProdutoComponent },
  { path: 'pagina-do-produto', component: PaginaDoProdutoComponent}
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
