import { Component } from '@angular/core';
import { ServicioAgendaService } from '../servicios/servicio-agenda.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  nombre:String
  telefono:String
  email:String
  notas:String
  borrador1:string='';
  borrador2:string='';
  borrador3:string='';
  borrador4:string='';
  prueba:String
  constructor(public myService:ServicioAgendaService) {
    this.prueba="asdasd";
  }
  guardar(nombre,telefono,email,notas){
    this.myService.letras.push({"nombre":nombre,"telefono":telefono,"email":email,"notas":notas});
    console.log(this.myService.letras);
    this.borrador1='';
    this.borrador2='';
    this.borrador3='';
    this.borrador4='';

  }

  borrar(id){
    this.myService.letras.splice(id,1);
  }
}
