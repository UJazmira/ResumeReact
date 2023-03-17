import React, { useState } from "react";
import { Container, Dropdown, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import myPhoto from "../image/my photo two.jpg";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              style={{
                width: "60px",
                marginRight: "20px",
              }}
              src="https://cdn-icons-png.flaticon.com/512/10083/10083618.png"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link
              to="/"
              style={{ textDecoration: "none", fontFamily: "cursive" }}
            >
              <NavbarBrand>Home</NavbarBrand>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", fontFamily: "cursive" }}
            >
              <NavbarBrand>About Me </NavbarBrand>
            </Link>
            <Link
              to="/hobby"
              style={{ textDecoration: "none", fontFamily: "cursive" }}
            >
              <NavbarBrand>My Hobby</NavbarBrand>
            </Link>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle
              style={{ fontFamily: "cursive" }}
              variant="dark"
              id="dropdown-basic"
            >
              My Contacts
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ backgroundColor: "darkkhaki", fontFamily: "cursive" }}
            >
              <Dropdown.Item>Web developer</Dropdown.Item>
              <Dropdown.Item>jazmirau@gmail.com</Dropdown.Item>
              <Dropdown.Item>+7 915 753 47-45</Dropdown.Item>
              <Dropdown.Item>+996 500 60-70-35</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
