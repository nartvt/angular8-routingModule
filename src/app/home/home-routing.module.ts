import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangChuComponentComponent } from './trang-chu-component/trang-chu-component.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';

const routes: Routes = [
    {
        path: "",redirectTo:"home",pathMatch:"fullmatch",
        component: HomeComponent, children: [
            {
                path: "trang-chu",
                component:TrangChuComponentComponent
            },
            {
                path: "danh-sach-phim",
                loadChildren:'./danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule'
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
