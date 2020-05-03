import React, { Component } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

// const urlC = "http://localhost:8080/character";

// let findCharacters = e => {
//   e.preventDefault();
//   fetch(urlC)
//     .then(res => res.json())
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.error(err);
//     });
// };

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar variant="dark" expand="lg" className="bar">
          <Navbar.Brand href="/" to="/">
            Heroes & Villains
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/character" to="/character">
                All
              </Nav.Link>
              <NavDropdown title="Customize" id="basic-nav-dropdown">
                <NavDropdown.Item href="/heroes" to="/heroes">
                  Good
                </NavDropdown.Item>
                <NavDropdown.Item href="/villains" to="/villains">
                  Evil
                </NavDropdown.Item>
                <NavDropdown.Item href="/males" to="/males">
                  Male
                </NavDropdown.Item>
                <NavDropdown.Item href="/females" to="/females">
                  Female
                </NavDropdown.Item>
                <NavDropdown.Item href="/humans" to="/humans">
                  Humans
                </NavDropdown.Item>
                <NavDropdown.Item href="/mutants" to="/mutants">
                  Mutants
                </NavDropdown.Item>
                <NavDropdown.Item href="/aliens" to="/aliens">
                  Aliens
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/marvelcomics" to="/marvelcomics">
                  Marvel Characters
                </NavDropdown.Item>
                <NavDropdown.Item href="/dccomics" to="/dccomics">
                  DC Characters
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Character Name"
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
