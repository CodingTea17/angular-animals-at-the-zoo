import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="row">
      <div class="col-4">
        <div class="list-group" id="list-tab" role="tablist">
          <a *ngFor="let angularAnimal of angularAnimals" class="list-group-item list-group-item-action" data-toggle="list" href="#{{angularAnimal.name}}" role="tab">{{angularAnimal.name}}</a>
        </div>
      </div>
      <div class="col-8">
        <div class="tab-content" id="nav-tabContent">
          <div *ngFor="let angularAnimal of angularAnimals" class="tab-pane fade show " id="{{angularAnimal.name}}" role="tabpanel">
            Name: {{angularAnimal.name}}
            Age: {{angularAnimal.age}}
            Diet: {{angularAnimal.diet}}
            Location: {{angularAnimal.location}}
            Caretakers: {{angularAnimal.caretakers}}
            Sex: {{angularAnimal.sex}}
            Likes: {{angularAnimal.likes}}
            Dislikes: {{angularAnimal.dislikes}}
          </div>
        </div>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  angularAnimals: Animal[] = [
    new Animal("Gallus Gallus Domesticus","Roadrunner", 9, "Omnivore", "The Coop", 2, "Female", "Dust Baths", "Cats & Raccoons"),
    new Animal("Ailuropoda melanoleuca", "Po", 7, "Herbivore", "Jade Palace", 3, "Male", "Dumplings", "Long walks"),
    new Animal("Equus quagga", "Marty", 22, "Herbivore", "Plains Habitat", 2, "Male", "The Wild", "Captivity")
  ]
}
