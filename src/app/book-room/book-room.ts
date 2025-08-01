import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from '../services/room.service';

declare const bootstrap: any;

@Component({
  selector: 'app-book-room',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-room.html',
  styleUrls: ['./book-room.scss']
})
export class BookRoomComponent {
  @Input() roomId = '';

  bookingForm = new FormGroup({
    guestName: new FormControl('', Validators.required),
    checkIn: new FormControl('', Validators.required),
    checkOut: new FormControl('', Validators.required)
  });

  constructor(private roomService: RoomService) {}

  confirmBooking() {
    if (this.bookingForm.invalid) {
      alert('Please complete all fields');
      return;
    }

    this.roomService.bookRoom(this.roomId);

    const toastEl = document.getElementById('bookingToast');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }

    this.bookingForm.reset();
  }
}
