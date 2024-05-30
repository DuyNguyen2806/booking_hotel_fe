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

function App() {
  return (
    <>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-room/:roomId" element={<EditRoom />} />
            <Route path="/existing-rooms" element={<ExistingRooms />} />
            <Route path="/add-room" element={<AddRoom />} />
            <Route path="/book-room/:roomId" element={<Checkout />} />
            <Route path="/all-rooms" element={<RoomListing />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
          </Routes>
        </Router>
        <Footer />
      </main>
    </>
  );
}

export default App;
