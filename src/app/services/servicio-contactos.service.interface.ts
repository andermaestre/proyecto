import { ContactoModel } from "../models/contacto.model";

export abstract class ServicioContactosServiceInterface {
    abstract getContactos(): ContactoModel[];
    abstract getContacto(id: number): ContactoModel;
    abstract addContacto(contacto: ContactoModel): void;
    abstract updateContacto(contacto1: ContactoModel): void;
    abstract deleteContacto(id: number): void;
}