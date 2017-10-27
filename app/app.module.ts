import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './new-animal.component';
import { FormsModule }  from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { YounginsPipe } from './youngins.pipe';

const appRoutes: Routes = [
  {
    path: 'list',
    component: AnimalListComponent
  },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full' },
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
                ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
