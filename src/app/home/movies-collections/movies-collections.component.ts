import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/movie.service';
import { MovieManagementService } from 'src/app/_core/movie-management.service';
import { ActivatedRoute } from '@angular/router';
import { DataCommonService } from './../../_core/service/data-common.service';

@Component({
  selector: 'app-movies-collections',
  templateUrl: './movies-collections.component.html',
  styleUrls: ['./movies-collections.component.scss']
})
export class MoviesCollectionsComponent implements OnInit {

  moviesCollections: any;

  constructor(
    private movieService:MovieService,
    private movieManagements: MovieManagementService,
    private dataCommonService: DataCommonService
  ) { }

  ngOnInit() {
    this.getMoviesCollections();
  }

  getMoviesCollections(){
    this.movieManagements.getListMovies().subscribe((data:any)=>{
      console.log(data);
      this.moviesCollections=data;
    });
    // const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP02";
    // this.dataCommonService.get(uri).subscribe((data) => {
    //   console.log(data);
    // });
  }
  
}
