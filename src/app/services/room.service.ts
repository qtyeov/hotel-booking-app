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
    { id: '3', name: '103', type: 'Suite', price: 250, availability: 'Available' },
    { id: '4', name: '201', type: 'Single', price: 110, availability: 'Available' },
    { id: '5', name: '202', type: 'Double', price: 160, availability: 'Available' },
    { id: '6', name: '203', type: 'Suite', price: 270, availability: 'Available' },
    { id: '7', name: '204', type: 'Single', price: 120, availability: 'Available' },
    { id: '8', name: '205', type: 'Double', price: 180, availability: 'Available' }
  ];

  constructor() {
    const saved = localStorage.getItem('bookedRooms');
    if (saved) {
      const bookedIds = JSON.parse(saved);
      this.rooms = this.rooms.map(r => ({
        ...r,
        availability: bookedIds.includes(r.id) ? 'Booked' : 'Available'
      }));
    }
  }

  getRooms(): Observable<Room[]> {
    return of(this.rooms);
  }

  bookRoom(id: string): void {
    const room = this.rooms.find(r => r.id === id);
    if (room) {
      room.availability = 'Booked';
      this.saveBookings();
    }
  }

  private saveBookings() {
    const booked = this.rooms.filter(r => r.availability === 'Booked').map(r => r.id);
    localStorage.setItem('bookedRooms', JSON.stringify(booked));
  }
}