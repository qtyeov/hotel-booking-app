import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomService } from '../services/room.service';
import { BookRoomComponent } from '../book-room/book-room';
import { FormsModule } from '@angular/forms';

declare const bootstrap: any;

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, BookRoomComponent, FormsModule],
  templateUrl: './room-list.html',
  styleUrls: ['./room-list.scss']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  selectedRoomId = '';
  roomTypes = ['All', 'Single', 'Double', 'Suite'];
  selectedType = 'All';

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.roomService.getRooms().subscribe(data => this.rooms = data);
  }

  get filteredRooms(): Room[] {
    return this.selectedType === 'All' ? this.rooms : this.rooms.filter(r => r.type === this.selectedType);
  }

  selectRoom(room: Room) {
    this.selectedRoomId = room.id;
    const modal = document.getElementById('bookingModal');
    if (modal) {
      const bsModal = new bootstrap.Modal(modal);
      bsModal.show();
    }
  }
}