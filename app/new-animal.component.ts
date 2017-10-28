import { Component, Output, EventEmitter } from '@angular/core';
import { AnimalService } from './animal.service';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  providers: [AnimalService],
  template: `
    <div class="row mb-3 ">
      <div class="col">
        <div class="card card-body">
          <h1 class="text-center">New Zoo Animal Form</h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-body">
          <div class="row">
            <div class="col-lg-6 col-sm-12">
              <input class="form-control form-control" #newName placeholder="Name"><br>
              <input class="form-control form-control" #newAge placeholder="Age"><br>
              <input class="form-control form-control" #newLocation placeholder="Location"><br>
              <input class="form-control form-control" #newSex placeholder="Sex"><br>
              <input class="form-control form-control" #newDislikes placeholder="Dislikes"><br>
            </div>
            <div class="col-lg-6 col-sm-12">
              <input class="form-control form-control" #newSpecies placeholder="Species"><br>
              <input class="form-control form-control" #newDiet placeholder="Diet"><br>
              <input class="form-control form-control" #newCaretakers placeholder="Caretakers"><br>
              <input class="form-control form-control" #newLikes placeholder="Likes"><br>
              <input class="form-control form-control" #newImgurl placeholder="Image URL"><br>
            </div>
          </div>
          <button class="btn btn-success btn-block" (click)="submitForm(newName.value, newAge.value, newLocation.value, newSex.value, newSpecies.value, newDiet.value, newCaretakers.value, newLikes.value, newImgurl.value); newName.value=''; newAge.value=''; newLocation.value=''; newSex.value=''; newSpecies.value=''; newDiet.value=''; newCaretakers.value=''; newLikes.value=''; newImgurl.value=''">Add to Zoo!</button>
        </div>
      </div>
    </div>
  `
})

export class NewAnimalComponent {
  constructor(private animalService: AnimalService) {}
  submitForm(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string, imgurl: string) {
    this.animalService.addAnimal(name, species, age, diet, location, caretakers, sex, likes, dislikes, imgurl);
  }
}
