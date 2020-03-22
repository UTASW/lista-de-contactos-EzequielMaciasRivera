import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechastring'
})
export class FechastringPipe implements PipeTransform {

  transform(value:String):String{
    if(!value) return ""
    return value.toUpperCase()
  }

}
