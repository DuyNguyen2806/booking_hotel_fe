import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import AddRoom from "./component/room/AddRoom";
import ExistingRooms from "./component/room/ExistingRooms";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Sửa đổi này
import Home from "./component/home/Home.jsx";
import EditRoom from "./component/room/EditRoom.jsx";
import NavBar from "./component/layout/NavBar.jsx";
import Footer from "./component/layout/Footer.jsx";
import RoomListing from "./component/room/RoomListing.jsx";
import Admin from "./component/admin/Admin.jsx";
import Checkout from "./component/bookings/Checkout.jsx";
import BookingSuccess from "./component/bookings/BookingSuccess.jsx";
import Bookings from "./component/bookings/Bookings.jsx";
import FindBooking from "./component/bookings/FindBooking.jsx";
import Registration from "./component/auth/Registration.jsx";
import Login from "./component/auth/Login.jsx";
import Profile from "./component/auth/Profile.jsx";
import Logout from "./component/auth/Logout.jsx";
import { AuthProvider } from "./component/auth/AuthProvider.jsx";
import RequireAuth from "./component/auth/RequireAuth.jsx";

function App() {
  return (
    <AuthProvider>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />
            <Route
              path="/book-room/:roomId"
              element={
                <RequireAuth>
                  <Checkout />
                </RequireAuth>
              }
            />
            <Route path="/book-room/:roomId" element={<Checkout />} />
            <Route path="/all-rooms" element={<RoomListing />} />
            <Route path="/existing-bookings" element={<Bookings />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/find-booking" element={<FindBooking />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
        <Footer />
      </main>
    </AuthProvider>
  );
}

export default App;
