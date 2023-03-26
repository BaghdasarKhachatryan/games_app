import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesListRoutingModule } from './movies-list-routing.module';
import { GamesListComponent } from './games-list.component';


@NgModule({
  declarations: [
    GamesListComponent
  ],
  imports: [
    CommonModule,
    MoviesListRoutingModule
  ]
})
export class MoviesListModule { }
