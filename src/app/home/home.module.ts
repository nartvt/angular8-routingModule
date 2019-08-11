import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TrangChuComponentComponent } from './trang-chu-component/trang-chu-component.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { MoviesCollectionsModule } from './movies-collections/movies-collections.module';
import { MaterialModule } from '../_core/material/material.module';
import { PipeModule } from './pipe/pipe.module';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    HomeComponent, 
    TrangChuComponentComponent, 
    TinTucComponent, LifeCycleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    MoviesCollectionsModule,
    PipeModule

  ]
})
export class HomeModule { }
