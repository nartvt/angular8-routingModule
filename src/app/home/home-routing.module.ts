import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponentComponent } from './trang-chu-component/trang-chu-component.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent, 
        children: [
            {
                path: "trang-chu",
                component:TrangChuComponentComponent
            },
            {
                path: "movies-collections",
                loadChildren:'./movies-collections/movies-collections.module#MoviesCollectionsModule'
            },
            {
                path: "tin-tuc",
                component: TinTucComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
