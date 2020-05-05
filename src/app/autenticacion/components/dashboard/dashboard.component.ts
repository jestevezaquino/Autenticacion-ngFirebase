import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/servicios/general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  emailUsuario:any;

  constructor(private GS:GeneralService) { }

  ngOnInit(): void {
    this.emailUsuario = this.GS.obtenerCorreoUsuario();
  }

}
