import { Component } from '@angular/core';
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

  constructor(private router: Router, private contactosServicio:ServicioContactosService) { 
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


