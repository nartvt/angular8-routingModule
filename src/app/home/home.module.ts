import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TrangChuComponentComponent } from './trang-chu-component/trang-chu-component.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { MoviesCollectionsModule } from './movies-collections/movies-collections.module';

@NgModule({
  declarations: [
    HomeComponent, 
    TrangChuComponentComponent, 
    TinTucComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MoviesCollectionsModule

  ]
})
export class HomeModule { }
