import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  danhSachPhim = [
    { movieId: 1, movieName: "Minions", priceMovie: "85000", picture: "./assets/images/minions.jpg" },
    { movieId: 2, movieName: "Home", priceMovie: "85000", picture: "./assets/images/home.jpg" },
    { movieId: 3, movieName: "Harvie", priceMovie: "85000", picture: "./assets/images/harvie.jpg" },
    { movieId: 4, movieName: "Insideout", priceMovie: "85000", picture: "./assets/images/insideout.jpg" }
  ];
  danhSachLike = [
    { movieId: 1, movieName: "Minions", soLike: 0 },
    { movieId: 2, movieName: "Home", soLike: 0 },
    { movieId: 3, movieName: "Harvie", soLike: 0 },
    { movieId: 4, movieName: "Insideout", soLike: 0 },
  ]
  constructor() { }

  getListMovies() {
    return this.danhSachPhim;
  }
  insertMovies(movie) {

  }
}
