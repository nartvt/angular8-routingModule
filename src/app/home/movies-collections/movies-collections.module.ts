import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesCollectionsComponent } from './movies-collections.component';
import { MoviesCollectionsRoutingModule } from './movies-collections-routing.module';
import { ItemMovieComponent } from './item-movie/item-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ShareModule } from 'src/app/_core/share/share.module';

@NgModule({
  declarations: [
    MoviesCollectionsComponent,
    ItemMovieComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MoviesCollectionsRoutingModule,
    ShareModule
  ]
})
export class MoviesCollectionsModule { }
