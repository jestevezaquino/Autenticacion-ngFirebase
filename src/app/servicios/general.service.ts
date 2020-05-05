import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  correoUsuario:any;

  constructor() { }

  obtenerCorreoUsuario(){
    return this.correoUsuario;
  }

  establecerCorreoUsuario(email:any){
    this.correoUsuario = email;
  }
}
