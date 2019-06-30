import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesCollectionsComponent } from './movies-collections.component';

const routes: Routes = [
    {
        path: "",
        component:MoviesCollectionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesCollectionsRoutingModule { }
