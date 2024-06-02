import { Injectable } from '@angular/core';
import { ContactoModel } from '../models/contacto.model';
import { ServicioContactosServiceInterface } from './servicio-contactos.service.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioContactosService extends ServicioContactosServiceInterface{

  protected contactos: ContactoModel[] = [];

  constructor() { 
    super();
    /*this.contactos.push({
      id: 1,
      nombre: 'Pedro',
      apellido: 'Perez',
      email: 'mailolai',
      emailServidor: '@gmail.com',
      telefono: '999666333',
      direccion: 'Calle 123 # 45 - 67',
      fecha_nacimiento: new Date(1990, 4, 20)
    })
    this.contactos.push({
      id: 2,
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'mailojuan',
      emailServidor: '@inetum.es',
      telefono: '333666999',
      direccion: 'Calle 123 # 45 - 67',
      fecha_nacimiento: new Date(1942, 5, 12)
    })
    this.contactos.push({
      id: 3,
      nombre: 'Maria',
      apellido: 'Perez',
      email: 'mailomaria',
      emailServidor: '@outlook.com',
      telefono: '999666333',
      direccion: 'Calle 123 # 45 - 67',
      fecha_nacimiento: new Date(1980, 1, 1)
    })*/
  }

  getContactos(): ContactoModel[] {
    return this.contactos;
  }

  getContacto(id: number): ContactoModel {
    return this.contactos.find(contacto => contacto.id === id) as ContactoModel;
  }

  addContacto(contacto: ContactoModel): void {
    contacto.id = this.contactos.length + 1;
    this.contactos.push(contacto);
  }

  updateContacto(contacto1: ContactoModel): void {
    const index = this.contactos.findIndex(contacto => contacto.id === contacto1.id);
    this.contactos[index] = contacto1;
  }

  deleteContacto(id: number): void {
    const index = this.contactos.findIndex(contacto => contacto.id === id);
    this.contactos.splice(index, 1);
  }

}
