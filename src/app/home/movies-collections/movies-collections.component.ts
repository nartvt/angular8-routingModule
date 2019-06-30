import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/movie.service';
import { MovieManagementService } from 'src/app/_core/movie-management.service';

@Component({
  selector: 'app-movies-collections',
  templateUrl: './movies-collections.component.html',
  styleUrls: ['./movies-collections.component.scss']
})
export class MoviesCollectionsComponent implements OnInit {

  moviesCollections: any;

  constructor(
    private movieService:MovieService,
    private movieManagements: MovieManagementService
  ) { }

  ngOnInit() {
    this.getMoviesCollections();
  }

  getMoviesCollections(){
    this.movieManagements.getListMovies().subscribe((data:any)=>{
      console.log(data);
      this.moviesCollections=data;
    });
  }
}
