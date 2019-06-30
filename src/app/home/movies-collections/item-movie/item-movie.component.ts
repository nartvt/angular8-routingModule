import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/_core/models/movie';

@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss']
})
export class ItemMovieComponent implements OnInit {

  @Input() movie;

  constructor() { }

  ngOnInit() {
  }

}
