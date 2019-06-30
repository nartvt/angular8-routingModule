import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  danhSachPhim = [
    { maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh: "./assets/images/minions.jpg" },
    { maPhim: 2, tenPhim: "Home", gia: "85000", hinhAnh: "./assets/images/home.jpg" },
    { maPhim: 3, tenPhim: "Harvie", gia: "85000", hinhAnh: "./assets/images/harvie.jpg" },
    { maPhim: 4, tenPhim: "Insideout", gia: "85000", hinhAnh: "./assets/images/insideout.jpg" }
  ];
  danhSachLike = [
    { maPhim: 1, tenPhim: "Minions", soLike: 0 },
    { maPhim: 2, tenPhim: "Home", soLike: 0 },
    { maPhim: 3, tenPhim: "Harvie", soLike: 0 },
    { maPhim: 4, tenPhim: "Insideout", soLike: 0 },
  ]
  constructor() { }

  getListMovies() {
    return this.danhSachPhim;
  }
  insertMovies(movie) {

  }
}
