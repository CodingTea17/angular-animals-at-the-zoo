import { Component, OnInit } from '@angular/core';
import { Animal } from './animal.model';
import { AnimalService } from './animal.service';

@Component({
  selector: 'animal-list',
  providers: [AnimalService],
  template: `
    <div class="row">
      <div class="col-4">
        <ul class="list-group">
          <li class="list-group-item list-group-item-dark" id="filter-item">
            <div class="row" id="button-row">
              <div class="col-3 text-left">
                Filter:
              </div>
              <div class="col-3 text-center">
                <a (click)="showAll()" class="a-link">All</a>
              </div>
              <div class="col-3 text-center">
                <a (click)="showOldies()" class="a-link">Oldies</a>
              </div>
              <div class="col-3 text-center">
                <a (click)="showYoungins()" class="a-link">Youngins</a>
              </div>
            </div>
          </li>
        </ul>
        <ng-container *ngIf="selectedAges === 'all'">
          <div class="list-group" id="list-tab" role="tablist">
            <a *ngFor="let angularAnimal of angularAnimals" class="list-group-item list-group-item-action" data-toggle="list" href="#{{angularAnimal.name}}" role="tab">{{angularAnimal.name}}</a>
          </div>
        </ng-container>
        <ng-container *ngIf="selectedAges === 'oldies'">
          <div class="list-group" id="list-tab" role="tablist">
            <a *ngFor="let angularAnimal of angularAnimals | oldies" class="list-group-item list-group-item-action" data-toggle="list" href="#{{angularAnimal.name}}" role="tab">{{angularAnimal.name}}</a>
          </div>
        </ng-container>
        <ng-container *ngIf="selectedAges === 'youngins'">
          <div class="list-group" id="list-tab" role="tablist">
            <a *ngFor="let angularAnimal of angularAnimals | youngins" class="list-group-item list-group-item-action" data-toggle="list" href="#{{angularAnimal.name}}" role="tab">{{angularAnimal.name}}</a>
          </div>
        </ng-container>
      </div>
      <div class="col-8">
        <div class="tab-content" id="nav-tabContent">
          <div *ngFor="let angularAnimal of angularAnimals" class="tab-pane fade show" id="{{angularAnimal.name}}" role="tabpanel">
            <div class="card card-body">
              <h2 class="text-center">{{angularAnimal.name}} ({{angularAnimal.species}})</h2>
              <div class="row">
                <div class="col-lg-6 col-sm-12">
                  <img src="{{angularAnimal.imgurl}}" class="img-fluid" alt="No Image Provided">
                </div>
                <div class="col-lg-6 col-sm-12">
                  <h4>Age: {{angularAnimal.age}}</h4>
                  <h4>Diet: {{angularAnimal.diet}}</h4>
                  <h4>Location: {{angularAnimal.location}}</h4>
                  <h4>Caretakers: {{angularAnimal.caretakers}}</h4>
                  <h4>Sex: {{angularAnimal.sex}}</h4>
                  <h4>Likes: {{angularAnimal.likes}}</h4>
                  <h4>Dislikes: {{angularAnimal.dislikes}}</h4>
                  <hr>
                  <div class="row">
                    <div class="col-6">
                      <input class="form-control" [(ngModel)]="angularAnimal.name" #updatedName>
                    </div>
                    <div class="col-3">
                      <input class="form-control" type="number" [(ngModel)]="angularAnimal.age" #updatedAge>
                    </div>
                    <div class="col-3">
                      <input class="form-control" type="number" [(ngModel)]="angularAnimal.caretakers" #updatedCaretakers>
                    </div>
                  </div>
                  <hr>
                  <button class="btn btn-success btn-block" (click)="updateAnimal(angularAnimal.id, updatedName.value, updatedAge.value, updatedCaretakers.value)">Update</button>
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
  selectedAges = "all";

  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    this.angularAnimals = this.animalService.getAnimals();
  }

  showOldies() {
    this.selectedAges = "oldies";
  }

  showYoungins() {
    this.selectedAges = "youngins";
  }

  showAll() {
    this.selectedAges = "all";
  }

  updateAnimal(name, age, caretakers, id) {
    this.animalService.updateAnimal(id, name, age, caretakers);
  }
}
