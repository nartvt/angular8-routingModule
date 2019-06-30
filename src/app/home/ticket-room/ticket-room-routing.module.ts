import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketRoomComponent } from './ticket-room.component';

const routes: Routes = [
    {
        path: "",
        component: TicketRoomComponent
    }
        
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TicketRoomRoutingModule { }
