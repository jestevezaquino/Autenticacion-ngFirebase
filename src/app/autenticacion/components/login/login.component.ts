import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { GeneralService } from 'src/app/servicios/general.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup;

  constructor(private fb:FormBuilder, private userAuth:AngularFireAuth, private GS:GeneralService, private router:Router) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  async iniciarSesion(){
    const email = this.formulario.controls.email.value;
    const password = this.formulario.controls.password.value;

    await this.userAuth.signInWithEmailAndPassword(email, password).then((userData)=>{

      this.GS.establecerCorreoUsuario(userData.user.email);
      this.router.navigate(['/dashboard']);
    }).catch((error)=>{
      console.log(error);
    })

  }
}
