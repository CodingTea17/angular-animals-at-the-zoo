import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { ANIMALS } from './initial-animals';

@Injectable()
export class AnimalService {

  constructor() { }

  getAnimals() {
    return ANIMALS;
  }

  addAnimal(name, species, age, diet, location, caretakers, sex, likes, dislikes, imgurl) {
    ANIMALS.push(new Animal(name, species, age, diet, location, caretakers, sex, likes, dislikes, imgurl));
  }
}
