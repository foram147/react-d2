import React from "react-bootstrap";
import { Navbar, Nav, FormControl } from "react-bootstrap";
import "../App.css";

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="Nav-text" href="#home">
        Strive BookStore
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="ml-1" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="ml-3" href="#link">
            About US
          </Nav.Link>
        </Nav>
        <FormControl
          className="nav-browse"
          placeholder="Browse"
          aria-label="Browse"
          aria-describedby="basic-addon2"
        />
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNav;
