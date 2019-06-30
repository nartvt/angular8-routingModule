import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieManagementService } from 'src/app/_core/movie-management.service';

@Component({
  selector: 'app-ticket-room',
  templateUrl: './ticket-room.component.html',
  styleUrls: ['./ticket-room.component.scss']
})
export class TicketRoomComponent implements OnInit {

  maLichChieu: any;
  ticketRoomDetail: any;
  constructor(
    private activedRoute: ActivatedRoute,
    private moviesManagementService:MovieManagementService
  ) { }

  ngOnInit() {
    this.getParamFromURL();
    this.getDetailTicketRoom();
  }
  getParamFromURL() {
    this.maLichChieu = this.activedRoute.snapshot.paramMap.get("id");
  }
  getDetailTicketRoom() {
    this.moviesManagementService.getListMovies().subscribe((data: any) => {
      console.log(data);
      this.ticketRoomDetail = data;
    });
}
}
