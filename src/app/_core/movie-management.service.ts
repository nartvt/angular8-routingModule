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
    const url = "http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP02 ";
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
  getDetailMovies(movieId) {

    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${ movieId}`;
    return this.http.get(url).pipe(
      tap(
        () => { },
        catchError(err => {
          return this.handleErr(err);
        })
      )
    )
  }
  getParamFromURL(maLichChieu) {

    const url = `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    return this.http.get(url).pipe(
      tap(
        () => { },
        catchError(err => {
          return this.handleErr(err);
        })
      )
    )
  }
}
