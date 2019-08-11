import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  info:string= "Cybersoft";
  percent: number = 332131.23;
  objSinhVien = {
  "ten": "Tai",
  "lop": "fe23"
  }
  array: Array<String> = ['a','b','c'];
  constructor() { }

  ngOnInit() {
  }

}
