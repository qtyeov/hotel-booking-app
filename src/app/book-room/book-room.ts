import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-book-room',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-room.html',
  styleUrls: ['./book-room.scss']
})
export class BookRoomComponent {
  @Input() roomId: string = '';
  guestName = '';
  checkIn = '';
  checkOut = '';

  constructor(private roomService: RoomService) {}

  confirmBooking() {
    if (!this.roomId || !this.guestName || !this.checkIn || !this.checkOut) {
      alert('Please fill in all fields');
      return;
    }

    this.roomService.bookRoom(this.roomId);
    alert(`Room ${this.roomId} booked successfully by ${this.guestName}!`);
    this.guestName = '';
    this.checkIn = '';
    this.checkOut = '';
  }
}