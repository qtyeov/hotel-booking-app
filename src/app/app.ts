import { Component, signal } from '@angular/core';
import { RoomListComponent } from './room-list/room-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RoomListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('hotel-booking-app');
}