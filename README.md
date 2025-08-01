# 🏨 Hotel Room Booking App

A responsive web application to view and book hotel rooms. Guests can view available rooms, select check-in/check-out dates, enter their name, and book a room using a simple UI.

---

### ✨ Features
- List of hotel rooms with ID, name, type, price, and availability
- Modal booking form with Reactive Forms (guest name, check-in/out)
- Room availability is persisted using `localStorage`
- Success toast notification after booking
- Filter rooms by type (Single, Double, Suite)
- Clean UI with Bootstrap grid and utility classes

---

### 🚀 How to Run the App
1. **Clone the repository:**
   ```bash
   git clone https://github.com/qtyeov/hotel-booking-app.git
   cd hotel-booking-app

2. **Install the dependencies:**
   ```bash
   npm install

3. **Start the Angular development server:**
   ```bash
   ng serve

---

### 📦 Assumptions Made

- Room data is hardcoded using RxJS of(...) and no external API is called.
- Booking logic is simulated in memory and persisted in localStorage.
- Each booking updates the room status to Booked.
- No backend or database is integrated.
- No authentication or role management included.

---

### 🧩 Screenshots

Room Listing            |  Booking Modal
:-------------------------:|:-------------------------:
![Rooms Screenshot](src/assets/screenshots/room1.png) | ![Booking Screenshot](src/assets/screenshots/booking1.png)

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
