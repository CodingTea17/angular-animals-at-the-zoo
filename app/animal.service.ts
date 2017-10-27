import { Injectable } from '@angular/core';
import { Animal } from './animal.model';
import { ANIMALS } from './initial-animals';

@Injectable()
export class AnimalService {

  constructor() { }

  getAnimals() {
    return ANIMALS;
  }
}
