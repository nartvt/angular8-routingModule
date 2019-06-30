import { Component, OnInit } from '@angular/core';
import { MovieManagementService } from '../../../_core/movie-management.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id: any;
  movieName: any;
  movie: any;
  constructor(
    private movieManagementService: MovieManagementService,
    private activedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.getParamFromURL();
    this.getDetailMovies();
  }
  getParamFromURL() {
    this.id = this.activedRoute.snapshot.paramMap.get("id");
    this.activedRoute.queryParams.subscribe((params: any) => {
      this.movieName =  params.movieName;
    });
  }
  getDetailMovies() {
    this.movieManagementService.getDetailMovies(this.id).subscribe((data: any) => { 
      this.movie = data;
    });
  }
  bookTicket(maLichChieu) {
    this.router.navigate(["home/ticket-room", maLichChieu]);
  }
}
