import { Component, OnInit } from '@angular/core';
import { MovieManagementService } from '../../../_core/movie-management.service';
import { ActivatedRoute,Router } from '@angular/router';
import { DataCommonService } from './../../../_core/service/data-common.service';

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
    private router: Router,
    private dataService : DataCommonService

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
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.id}`;
    this.dataService.get(uri).subscribe((data: any) => {
      console.log(data);
    });
    // this.movieManagementService.getDetailMovies(this.id).subscribe((data: any) => { 
    //   this.movie = data;
    // });
  }
  bookTicket(maLichChieu) {
    this.router.navigate(["home/ticket-room", maLichChieu]);
  }
}
