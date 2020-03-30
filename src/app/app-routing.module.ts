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
import { PaginaCarrinhoComponent } from "./components/pagina-carrinho/pagina-carrinho.component";
import { CompraFinalizadaComponent } from "./components/compra-finalizada/compra-finalizada.component";
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { PaginaInstitucionalComponent } from './components/pagina-institucional/pagina-institucional.component';
import { HistoricoPedidosComponent } from './components/historico-pedidos/historico-pedidos.component'
import { FuncionariosComponent } from "./components/funcionarios/funcionarios.component";
import { PaginaRelatoriosComponent } from './components/pagina-relatorios/pagina-relatorios.component';
import { ReclamacoesComponent } from './components/pagina-relatorios/reclamacoes/reclamacoes.component';
import { RelatoriosComponent } from './components/pagina-relatorios/relatorios/relatorios.component';
import { CuponsComponent } from './components/pagina-relatorios/cupons/cupons.component';
import { EstoqueComponent } from './components/pagina-relatorios/estoque/estoque.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'cadastre-se', component: CadastroComponent},
  { path: 'contato', component: ContatoComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'produto/:id', component: PaginaProdutoComponent},
  { path: 'home', component: HomeComponent},
  { path: 'carrinho', component: PaginaCarrinhoComponent },
  { path: 'finalizar-compra', component: CompraFinalizadaComponent},
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'pagina-institucional', component: PaginaInstitucionalComponent},
  { path: 'historico-pedidos', component: HistoricoPedidosComponent},
  { path: 'funcionario', component: FuncionariosComponent},
  { path:  'pg-relatorios', component: PaginaRelatoriosComponent},
  { path: 'reclamacoes' , component: ReclamacoesComponent},
  { path: 'relatorios' , component: RelatoriosComponent},
  { path: 'cupons' , component: CuponsComponent},
  { path: 'estoque' , component: EstoqueComponent}
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
