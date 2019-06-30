import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TrangChuComponentComponent } from './trang-chu-component/trang-chu-component.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { DanhSachPhimModule } from './danh-sach-phim/danh-sach-phim.module';

@NgModule({
  declarations: [HomeComponent, TrangChuComponentComponent, TinTucComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DanhSachPhimModule

  ]
})
export class HomeModule { }
