import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // Trang Home
  { path: "", redirectTo: "home", pathMatch: "full" },

  { path: "home", loadChildren: "./home/home.module#HomeModule" },

  // Trang Admin
  { path: "admin", loadChildren: "./admin/admin.module#AdminModule" },

  /// Page Not Found
  {
    path:"**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
