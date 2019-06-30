import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesCollectionsComponent } from './movies-collections.component';
import { MoviesCollectionsRoutingModule } from './movies-collections-routing.module';
import { ItemMovieComponent } from './item-movie/item-movie.component';

@NgModule({
  declarations: [MoviesCollectionsComponent, ItemMovieComponent],
  imports: [
    CommonModule,
    MoviesCollectionsRoutingModule
  ]
})
export class MoviesCollectionsModule { }
