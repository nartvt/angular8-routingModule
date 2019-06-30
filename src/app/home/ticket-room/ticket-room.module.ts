import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketRoomComponent } from './ticket-room.component';
import { TicketRoomRoutingModule } from './ticket-room-routing.module';

@NgModule({
  declarations: [TicketRoomComponent],
  imports: [
    CommonModule,
    TicketRoomRoutingModule
  ]
})
export class TicketRoomModule { }
