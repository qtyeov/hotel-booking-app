import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  availability: 'Available' | 'Booked';
}

@Injectable({ providedIn: 'root' })
export class RoomService {
  private rooms: Room[] = [
    { id: '1', name: '101', type: 'Single', price: 100, availability: 'Available' },
    { id: '2', name: '102', type: 'Double', price: 150, availability: 'Available' },
    { id: '3', name: '103', type: 'Suite', price: 250, availability: 'Available' }
  ];

  getRooms(): Observable<Room[]> {
    return of(this.rooms);
  }

  bookRoom(id: string): void {
    const room = this.rooms.find(r => r.id === id);
    if (room) room.availability = 'Booked';
  }
}