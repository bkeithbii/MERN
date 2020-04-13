import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./App.css";
import { Route, Link, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Character from "../Characters/Character";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Header />
        </nav>
        <main>
          <Route path="/characters" component={Character} />
        </main>
      </div>
    );
  }
}

export default App;
