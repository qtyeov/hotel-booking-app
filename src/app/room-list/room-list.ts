import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room, RoomService } from '../services/room.service';
import { BookRoomComponent } from '../book-room/book-room';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, BookRoomComponent],
  templateUrl: './room-list.html',
  styleUrls: ['./room-list.scss']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  selectedRoomId: string = '';

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(data => this.rooms = data);
  }

  selectRoom(id: string) {
    this.selectedRoomId = id;
  }
}
