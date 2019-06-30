import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/_core/models/movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss']
})
export class ItemMovieComponent implements OnInit {

  @Input() movie;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  detailMovies() {
    this.router.navigate(
      [
        "/home/movies-collections/movie-detail",
        this.movie.MaPhim
      ],
      {
        queryParams: {
        movieName: this.movie.TenPhim
      }}
    );
  }
}
