import React, { Component } from "react";
import "./App.css";
import { Route, Link, Redirect } from "react-router-dom";
import Nav from "../Navbar/Nav";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Route path="/" exact component={Nav} />
        </nav>
      </div>
    );
  }
}

export default App;
