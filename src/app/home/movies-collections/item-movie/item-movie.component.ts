import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/_core/models/movie';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/_core/share/share-data.service';


@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss']
})
export class ItemMovieComponent implements OnInit {

  @Input() movie;

  constructor(
    private router: Router,
    private sharedataService: ShareDataService) { }

  ngOnInit() {
  }
  testArray() {
    return [
      {
        maLichChieu: 'L001',
        ngayChieu: '2019-03-09'
      },
      {
        maLichChieu: 'L002',
        ngayChieu: '2019-03-09'
      }

    ];
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
  xemNhanh() {
    this.sharedataService.sharingDataDetail(this.movie);
  }
}
