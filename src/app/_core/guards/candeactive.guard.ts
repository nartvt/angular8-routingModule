import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpComponent } from 'src/app/home/form/sign-up/sign-up.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactiveGuard implements CanDeactivate<SignUpComponent> {
  canDeactivate(component) {
    
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    return component.canDeactivate() || window.confirm("Ban Co Muon Thoat Trang Khong");
  }
  
}
