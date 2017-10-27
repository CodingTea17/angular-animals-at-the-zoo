import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "oldies",
  pure: false
})


export class OldiesPipe implements PipeTransform {
  transform(input: Animal[], args) {
    let oldies: Animal[] = [];
    input.forEach((animal) => {
      if (animal.age >= 2) {
        oldies.push(animal);
      }
    })
    return oldies;
  }
}
