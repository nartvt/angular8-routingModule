import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private movieCollection = new BehaviorSubject([] as any);
  shareListMovie = this.movieCollection.asObservable();

  private detailMovie = new BehaviorSubject({} as any);
  shareDetailMovie = this.detailMovie.asObservable();
  constructor() { }

  sharingDataMovieCollection(listMovie: any) {
    this.movieCollection.next(listMovie);
  }
  sharingDataDetail(movie: any) {
    this.detailMovie.next(movie);
  }
}
