import { Component, OnInit } from '@angular/core';
import { MovieManagementService } from '../../../_core/movie-management.service';
import { ActivatedRoute,Router } from '@angular/router';
import { DataCommonService } from './../../../_core/service/data-common.service';
import { Subscription } from 'rxjs';
import { ItemMovieComponent } from '../item-movie/item-movie.component';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  id: any;
  movieName: any;
  movie: any;
  data: any;
  subMovieDetail = new Subscription();
  constructor(
    private movieManagementService: MovieManagementService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataCommonService,
    private itemMovie: ItemMovieComponent

  ) { }

  ngOnInit() {
  //  this.itemMovie = new ItemMovieComponent();
    this.getParamFromURL();
    this.getDetailMovies();
   // this.data = this.itemMovie.testArray();
    console.log("abc");    
   // console.log(this.data);    
  }
  getParamFromURL() {
    this.id = this.activedRoute.snapshot.paramMap.get("id");
    this.activedRoute.queryParams.subscribe((params: any) => {
      this.movieName =  params.movieName;
    });
  }
  getDetailMovies() {
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.id}`;
    this.subMovieDetail =  this.dataService.get(uri).subscribe((data: any) => {
      console.log(data);
    });
    // this.movieManagementService.getDetailMovies(this.id).subscribe((data: any) => { 
    //   this.movie = data;
    // });
  }
  bookTicket(maLichChieu) {
    this.router.navigate(["home/ticket-room", maLichChieu]);
  }
  OnDestroy() {
    this.subMovieDetail.unsubscribe();
  }
}
