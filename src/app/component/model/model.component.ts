import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/_core/share/share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  movie: any;
  constructor(
    private router: Router,
    private sharedataService: ShareDataService
  ) { }

  ngOnInit() {
    this.sharedataService.shareDetailMovie.subscribe((data: any) => {
      console.log(data);
      this.movie = data;
    });
  }

}
