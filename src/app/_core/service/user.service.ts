import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


const httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  signUp(user): Observable<any> {
    const url = "http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung";
    return this.http.post(url, user, httpOption).pipe(
      tap(
        () => { },
        catchError(err => {
          return this.handleErr(err);
        })
      )
    )
  }
  handleErr(err) {
    return err;
  }
  signIn(obj) {
   console.log(obj);
   
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?TaiKhoan=${obj.TaiKhoan}&MatKhau=${obj.MatKhau}`;
    return this.http.post(url, obj, httpOption).pipe(
      tap(
        () => { },
        catchError(err => {
          return this.handleErr(err);
        })
      )
    )
  }
}

