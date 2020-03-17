import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './components/login/login.component'
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { PaginaProdutoComponent } from './components/pagina-produto/pagina-produto.component';
import { CadastroComponent } from './components/cadastro/cadastro.component'



const routes: Routes = [
  { path: '', redirectTo: 'checkout', pathMatch: 'full'},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'cadastre', component: CadastroComponent },
  { path: 'quemSomos', component: QuemSomosComponent },
  { path: 'paginaProduto', component: PaginaProdutoComponent }
 


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
