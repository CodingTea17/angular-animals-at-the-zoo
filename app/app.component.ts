import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="jumbotron text-center">
        <h1>{{title}}</h1>
        <a routerLink="/" routerLinkActive="active">View Animals</a> |
        <a routerLink="/new" routerLinkActive="active">New Animal</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  title: string = "Angular Animals at the Zoo";
}
