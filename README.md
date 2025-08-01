# 🏨 Hotel Room Booking App

A responsive web application to view and book hotel rooms. Guests can view available rooms, select check-in/check-out dates, enter their name, and book a room using a simple UI.

---

### ✨ Features
- List of hotel rooms with ID, type, price, and availability
- Booking form in modal popup (guest name, check-in/out date)
- Simulated booking action using local state
- Success toast notification after booking
- Clean, responsive UI built with Bootstrap

---

### 🧩 Screenshots

Room Listing            |  Booking Modal
:-------------------------:|:-------------------------:
![Rooms Screenshot](src/assets/screenshots/rooms.png) | ![Booking Screenshot](src/assets/screenshots/booking.png)

---

### 🛠 Tech Stack

- **Framework:** Angular 17+
- **Language:** TypeScript
- **Styling:** SCSS + Bootstrap 5
- **State Management:** Local state with RxJS
- **API Simulation:** RxJS `of(...)` mock data

---

### 📦 Project Structure

```bash
src/app/
├── book-room/          # Booking modal component
├── room-list/          # Room list display component
├── services/           # Room service (mock API)
├── models/             # Room model interface
