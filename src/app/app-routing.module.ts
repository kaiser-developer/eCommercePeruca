import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";

const routes: Routes = [
  { path: '', redirectTo: 'checkout', pathMatch: 'full'},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: 'checkout'}
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
