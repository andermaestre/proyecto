import { Component, inject } from '@angular/core';
import { ServicioContactosService } from 'src/app/services/servicio-contactos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent {

  divError = 'none';
  divOk = 'none';
  contactosServicio: ServicioContactosService = inject(ServicioContactosService);
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      telefono: [''],
      direccion: [''],
      fecha_nacimiento: ['']
    });
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  submitForm(){
    console.log(JSON.stringify(this.form.value));
    this.contactosServicio.addContacto(this.form.value);
    this.divOk = 'block';
    this.router.navigate(['/lista-contactos']);
  }

  

  
  
  



}
