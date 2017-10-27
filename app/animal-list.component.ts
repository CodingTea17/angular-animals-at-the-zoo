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
          <div *ngFor="let angularAnimal of angularAnimals" class="tab-pane fade show" id="{{angularAnimal.name}}" role="tabpanel">
            <div class="card card-body">
              <h2 class="text-center">{{angularAnimal.name}} ({{angularAnimal.species}})</h2>
              <div class="row">
                <div class="col-lg-6 col-sm-12">
                  <img src="{{angularAnimal.imgurl}}" class="img-fluid" alt="Responsive image">
                </div>
                <div class="col-lg-6 col-sm-12">
                  <h4>Age: {{angularAnimal.age}}</h4>
                  <h4>Diet: {{angularAnimal.diet}}</h4>
                  <h4>Location: {{angularAnimal.location}}</h4>
                  <h4>Caretakers: {{angularAnimal.caretakers}}</h4>
                  <h4>Sex: {{angularAnimal.sex}}</h4>
                  <h4>Likes: {{angularAnimal.likes}}</h4>
                  <h4>Dislikes: {{angularAnimal.dislikes}}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  angularAnimals: Animal[] = [
    new Animal("Gallus Gallus Domesticus","Roadrunner", 9, "Omnivore", "The Coop", 2, "Female", "Dust Baths", "Cats & Raccoons", "https://i.pinimg.com/originals/7a/4c/08/7a4c0838d716459599ad4cf2b63727c4.jpg"),
    new Animal("Ailuropoda Melanoleuca", "Po", 7, "Herbivore", "Jade Palace", 3, "Male", "Dumplings", "Long walks", "https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.nbcnews-ux-2880-1000.jpg"),
    new Animal("Equus Quagga", "Marty", 22, "Herbivore", "Plains Habitat", 2, "Male", "The Wild", "Captivity", "https://www.sa-venues.com/wildlife/graphics/zebra/1.jpg")
  ]
}
