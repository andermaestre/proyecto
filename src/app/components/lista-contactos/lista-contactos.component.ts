import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ContactoModel } from'src/app/models/contacto.model';
import { ServicioContactosService } from 'src/app/services/servicio-contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  contactos : ContactoModel[] = [];
  contactosServicio: ServicioContactosService = inject(ServicioContactosService);

  constructor(private router: Router) { 
    this.contactos = this.contactosServicio.getContactos();
  }

  eliminar(id: number) {
    this.contactosServicio.deleteContacto(id);
    this.contactos = this.contactosServicio.getContactos();
  }

  modificar(id: number) {
    this.router.navigate(['/modificar-contacto', id]);
  }

}


