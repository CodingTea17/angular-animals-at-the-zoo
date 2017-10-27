import { Component, OnInit } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalService } from './animal.service';

@Component({
  selector: 'animal-list',
  providers: [AnimalService],
  template: `
    <div class="row">
      <div class="col-4">
        <div class="list-group" id="list-tab" role="tablist">
          <a *ngFor="let angularAnimal of angularAnimals | oldies" class="list-group-item list-group-item-action" data-toggle="list" href="#{{angularAnimal.name}}" role="tab">{{angularAnimal.name}}</a>
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

export class AnimalListComponent implements OnInit {
  angularAnimals: Animal[];

  constructor(private animalService: AnimalService) {}

  ngOnInit(){
    this.angularAnimals = this.animalService.getAnimals();
  }
}
