import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Link to="/characters">
          <Button variant="light">Enter</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
