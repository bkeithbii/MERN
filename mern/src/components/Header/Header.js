import React, { Component } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Heroes & Villains</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Characters</Nav.Link>
              <Nav.Link href="#link">Powers</Nav.Link>
              <NavDropdown title="Customize" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Good</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Evil</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Male</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Female</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Humans</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Mutants</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Aliens</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.8">
                  Marvel Characters
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.9">
                  DC Characters
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success" className="search">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
