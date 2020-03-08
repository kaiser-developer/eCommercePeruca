import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { ContatoComponent } from './component/contato/contato.component';
import { PaginaProdutoComponent } from './component/pagina-produto/pagina-produto.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { QuemSomosComponent } from './component/quem-somos/quem-somos.component';
import { ProdutosGeralComponent } from './component/produtos-geral/produtos-geral.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: "home", component: HomeComponent },
  { path: 'produtosgeral', component: ProdutosGeralComponent },
  { path:"contato" , component: ContatoComponent },
  { path:"produto" , component: PaginaProdutoComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'quemsomos', component: QuemSomosComponent },
  { path: '**', redirectTo: 'home'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }