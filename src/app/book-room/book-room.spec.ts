import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookRoomComponent } from './book-room';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('BookRoomComponent', () => {
  let component: BookRoomComponent;
  let fixture: ComponentFixture<BookRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BookRoomComponent, // the standalone component
        CommonModule,
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
