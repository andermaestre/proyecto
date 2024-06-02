import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoModel } from 'src/app/models/contacto.model';
import { ServicioContactosService } from 'src/app/services/servicio-contactos.service';

@Component({
  selector: 'app-modificar-contacto',
  templateUrl: './modificar-contacto.component.html',
  styleUrls: ['./modificar-contacto.component.css']
})
export class ModificarContactoComponent implements OnInit, ControlValueAccessor{
  @HostListener('blur', []) onTouched: any = () => { };
  @HostListener('input', ['$event']) onChange: any = () => { };
  titulo = 'Modificar Contacto';
  divError = 'none';
  divOk = 'none';
  form: FormGroup;
  contacto: ContactoModel | null = null;
  id: number = -1;

  private valueType: 'value' | 'valueAsDate' = 'value';

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private renderer: Renderer2, private elementRef: ElementRef, private contactosServicio: ServicioContactosService) { 
    this.form = this.fb.group({
      id: [''],
      nombre: [''],
      apellido: [''],
      email: [''],
      emailServidor: [''],
      telefono: [''],
      direccion: [''],
      fecha_nacimiento: ['']
    });
    
  }
  

  ngOnInit(): void {  
    this.route.paramMap.subscribe(params => {
      this.id = Number.parseInt(params.get('id') || '');
    });
    this.contacto = this.contactosServicio.getContacto(this.id);
    this.form = this.fb.group({
      id: [this.contacto.id],
      nombre: [this.contacto.nombre],
      apellido: [this.contacto.apellido],
      email: [this.contacto.email],
      emailServidor: [this.contacto.emailServidor],
      telefono: [this.contacto.telefono],
      direccion: [this.contacto.direccion],
      fecha_nacimiento: [this.contacto.fecha_nacimiento]
    });
  }

  submitForm(){
    if(null != this.form){
      console.log(JSON.stringify(this.form.value));
      this.contactosServicio.updateContacto(this.form.value);
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
