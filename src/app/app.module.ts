import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { NuevoContactoComponent } from './components/nuevo-contacto/nuevo-contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { ModificarContactoComponent } from './components/modificar-contacto/modificar-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaContactosComponent,
    NuevoContactoComponent,
    ModificarContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    JsonPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
