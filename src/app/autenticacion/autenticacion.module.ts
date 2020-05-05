import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutenticacionComponent } from './autenticacion.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [AutenticacionComponent, LoginComponent, RegistroComponent, DashboardComponent],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AutenticacionModule { }
