import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioAgendaService {
  letras:Array<any>
  constructor() {
    this.letras=[];
  }
}
