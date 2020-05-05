import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario:FormGroup;

  constructor(private fb:FormBuilder, private userAuth:AngularFireAuth, private rltDatabase:AngularFireDatabase) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  async registrarUsuario(){
    const email = this.formulario.controls.email.value;
    const clave = this.formulario.controls.password.value;
    const edad = this.formulario.controls.age.value;

    await this.userAuth.createUserWithEmailAndPassword(email,clave).then(()=>{

      this.userAuth.currentUser.then(async (user)=>{
        await this.rltDatabase.database.ref('sistema/users/'+user.uid+'/').set({
          correo: email,
          clave: clave,
          edad: edad,
          id: user.uid
        });

        (await this.userAuth.currentUser).sendEmailVerification();

        alert('Se ha registrado correctamente');
        this.formulario.reset();
      });
    }).catch((error)=>{
      const errores = error.code;

      switch(errores){
        case "auth/email-already-in-use":
          alert('Este email ya existe');
          break;
        case "auth/invalid-email":
          alert('Correo invalido.');
          break;
        case "auth/operation-not-allowed":
          alert('Estamos dandole mantenimiento al sistema.');
          break;
        case "auth/weak-password":
          alert('Clave debil.');
          break;
      }
    });
  }
}
