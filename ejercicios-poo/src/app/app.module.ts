import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';
import { EjecutableComponent } from './components/ejecutable/ejecutable.component';

@NgModule({
  declarations: [
    AppComponent,
    CuentaComponent,
    EjecutableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
