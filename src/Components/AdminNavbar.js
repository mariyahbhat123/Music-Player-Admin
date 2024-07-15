import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/esm/Button";
export default function AdminNavbar() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className=""
        style={{ backgroundColor: "#332D2D", color: "white" }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            Music-Player
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                PODCASTS
              </Nav.Link>
              <NavDropdown
                title="LIBRARY"
                id="collapsible-nav-dropdown"
                style={{ color: "white" }}
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  style={{ color: "white", backgroundColor: "#332D2D" }}
                >
                  Music
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Podcasts</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <div>
                <input type="search" placeholder="Search Music" />
                <Button variant="none">Search</Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
