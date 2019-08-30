import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';

import { ClientesService } from './clientes.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule, ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
