import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "youngins",
  pure: false
})


export class YounginsPipe implements PipeTransform {
  transform(input: Animal[], args) {
    let youngins: Animal[] = [];
    input.forEach((animal) => {
      if (animal.age < 2) {
        youngins.push(animal);
      }
    })
    return youngins;
  }
}
