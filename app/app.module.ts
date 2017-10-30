import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './new-animal.component';
import { FormsModule }  from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { YounginsPipe } from './youngins.pipe';
import { OldiesPipe } from './oldies.pipe';

const appRoutes: Routes = [
  {
    path: '',
    component: AnimalListComponent
  },
  {
    path: 'new',
    component: NewAnimalComponent
  },
];

@NgModule({
  imports: [ BrowserModule,
              FormsModule,
              RouterModule.forRoot(appRoutes),
            ],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  NewAnimalComponent,
                  YounginsPipe,
                  OldiesPipe,
                ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
