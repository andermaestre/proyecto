import { Component, ElementRef, HostListener, Renderer2, inject } from '@angular/core';
import { ServicioContactosService } from 'src/app/services/servicio-contactos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent {
  @HostListener('blur', []) onTouched: any = () => { };
  @HostListener('input', ['$event']) onChange: any = () => { };
  titulo = 'Nuevo Contacto';
  divError = 'none';
  divOk = 'none';
  form: FormGroup;
  private valueType: 'value' | 'valueAsDate' = 'value';


  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private renderer: Renderer2, private elementRef: ElementRef, private contactosServicio: ServicioContactosService) {
    
    this.form = this.fb.group({
      nombre: [''],
      apellido: [''],
      email: [''],
      emailServidor: [''],
      telefono: [''],
      direccion: [''],
      fecha_nacimiento: ['']
    });

    this.form.get("nombre")?.addValidators([
      Validators.required,
      Validators.minLength(2), 
      Validators.maxLength(20),
      Validators.pattern(/^[A-Z][a-z]*$/)
    ]);

    this.form.get("apellido")?.addValidators([
      Validators.required,
      Validators.minLength(2), 
      Validators.maxLength(50),
      Validators.pattern(/^[A-Z][a-z]*$/)
    ]);

    this.form.get("email")?.addValidators([
      Validators.required,
      Validators.minLength(2), 
      Validators.maxLength(50)
    ]);
      
    this.form.get("emailServidor")?.addValidators([
      Validators.required,
      Validators.nullValidator
    ]);

    this.form.get("telefono")?.addValidators([
      Validators.required,
      Validators.minLength(9), 
      Validators.maxLength(15),
      Validators.pattern(/^\d*$/)]);

    this.form.get("direccion")?.addValidators([
      Validators.maxLength(50)
    ]);

    

  }
  

  submitForm(){
    if(this.form.valid){
      console.log(JSON.stringify(this.form.value));
      this.contactosServicio.addContacto(this.form.value);
      this.divOk = 'block';
      this.divError = 'none';
      this.router.navigate(['/lista-contactos']);
    }else{
      this.divError = 'block';
      this.divOk = 'none';
    }
    
  }

  registerOnChange(fn: any): void {
    this.onChange = (event: any) => fn(event.target[this.valueType])
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: Date | string) {
    this.valueType = typeof value === 'string' ? 'value' : 'valueAsDate';
    this.renderer.setProperty(this.elementRef.nativeElement, this.valueType, value);
  }

}
