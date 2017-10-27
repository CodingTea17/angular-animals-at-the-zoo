import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ol class="list-group">
    <li *ngFor="let angularAnimal of angularAnimals">
      Name: {{angularAnimal.name}}
      Age: {{angularAnimal.age}}
      Diet: {{angularAnimal.diet}}
      Location: {{angularAnimal.location}}
      Caretakers: {{angularAnimal.caretakers}}
      Sex: {{angularAnimal.sex}}
      Likes: {{angularAnimal.likes}}
      Dislikes: {{angularAnimal.dislikes}}
    </li>
  </ol>
  `
})

export class AnimalListComponent {
  angularAnimals: Animal[] = [
    new Animal("Gallus Gallus Domesticus","Roadrunner", 9, "Omnivore", "The Coop", 2, "Female", "Dust Baths", "Cats & Raccoons"),
    new Animal("Ailuropoda melanoleuca", "Po", 7, "Herbivore", "Jade Palace", 3, "Male", "Dumplings", "Long walks"),
    new Animal("Equus quagga", "Marty", 22, "Herbivore", "Plains Habitat", 2, "Male", "The Wild", "Captivity")
  ]
}
