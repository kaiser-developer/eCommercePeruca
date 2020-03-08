import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { Validacoes } from './cadastro/validacoes.component.ts/validacoes.component.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CadastroComponent,
    Validacoes.Component.TsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
