import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponentComponent } from './trang-chu-component/trang-chu-component.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { AuthGuard } from '../_core/guards/auth.guard';

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
                loadChildren: './movies-collections/movies-collections.module#MoviesCollectionsModule',
                canActivate: [AuthGuard]
            },
            {
                path: "tin-tuc",
                component: TinTucComponent
            },
            {
                path: "ticket-room/:id",
                loadChildren: './ticket-room/ticket-room.module#TicketRoomModule'
            },
            {
                path: "form",
                loadChildren: "./form/form.module#FormModule"
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
