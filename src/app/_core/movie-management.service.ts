import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieManagementService {

  constructor(private http: HttpClient) { }
  getListMovies(): Observable<any> {
    const url = "http://svcy2.myclass.vn/api/QuanlyPhim/LayDanhSachPhim?MaNhom=GP09";
    return this.http.get(url).pipe(
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
}
