import { Component } from '@angular/core';
import { ServicioAgendaService } from '../servicios/servicio-agenda.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
   letras:Array<any>
  constructor(public myService:ServicioAgendaService) {
    this.letras=myService.letras;
  }
borrar(id){
  this.myService.letras.splice(id,1);
}
}
