import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [showAccount, setShowAccount] = useState(false);

  const handleAccountClick = () => {
    setShowAccount(!showAccount);
  };
  return (
    <Navbar expand="lg" bg="light" className="px-5 shadow mt-5 sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand hotel-color">
          D2T Hotel
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link
              as={NavLink}
              to="/all-rooms"
              style={{ marginRight: "20px" }}
            >
              All rooms
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin">
              Admin
            </Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <Nav.Link as={NavLink} to="/find-booking">
              Find My Booking
            </Nav.Link>
            <NavDropdown title="Account" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/login">
                Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
