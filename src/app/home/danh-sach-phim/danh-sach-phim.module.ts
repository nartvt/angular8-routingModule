import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim.component';
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
import { ItemMovieComponent } from './item-movie/item-movie.component';

@NgModule({
  declarations: [DanhSachPhimComponent, ItemMovieComponent],
  imports: [
    CommonModule,
    DanhSachPhimRoutingModule
  ]
})
export class DanhSachPhimModule { }
