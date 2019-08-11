import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/movie.service';
import { MovieManagementService } from 'src/app/_core/movie-management.service';
import { ActivatedRoute } from '@angular/router';
import { DataCommonService } from './../../_core/service/data-common.service';
import { Subscription } from 'rxjs';
import { ShareDataService } from '@share/share-data.service';
@Component({
  selector: 'app-movies-collections',
  templateUrl: './movies-collections.component.html',
  styleUrls: ['./movies-collections.component.scss']
})
export class MoviesCollectionsComponent implements OnInit {

  moviesCollections: any;
  subcription = new Subscription();
  constructor(
    private movieService:MovieService,
    private movieManagements: MovieManagementService,
    private dataCommonService: DataCommonService,
    private shareDataService: ShareDataService
  ) { }

  ngOnInit() {
    this.getMoviesCollections();
  }

  getMoviesCollections(){
    this.subcription =  this.movieManagements.getListMovies().subscribe((data:any)=>{
      console.log(data);
      this.moviesCollections = data;
      this.shareDataService.sharingDataMovieCollection(data);
    });
    // const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP02";
    // this.dataCommonService.get(uri).subscribe((data) => {
    //   console.log(data);
    // });
  }
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }
  
}
