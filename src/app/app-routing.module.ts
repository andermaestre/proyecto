import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { NuevoContactoComponent } from './components/nuevo-contacto/nuevo-contacto.component';
import { ModificarContactoComponent } from './components/modificar-contacto/modificar-contacto.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista-contactos', pathMatch: 'full' },
  { path: 'lista-contactos', component: ListaContactosComponent },
  { path: 'nuevo-contacto', component: NuevoContactoComponent },
  { path:'modificar-contacto/:id', component: ModificarContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
