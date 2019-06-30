import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCollectionsComponent } from './movies-collections.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
    { path: "",component:MoviesCollectionsComponent },
    { path: "movie-detail/:id", component: MovieDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesCollectionsRoutingModule { }
