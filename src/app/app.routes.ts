import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./room-list/room-list').then(m => m.RoomListComponent)
  },
  {
    path: 'book-room',
    loadComponent: () => import('./book-room/book-room').then(m => m.BookRoomComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
