import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>{{title}}</h1>
      </div>
    </div>
  `
})

export class AppComponent {
  title: string = "Angular Animals at the Zoo";
}
