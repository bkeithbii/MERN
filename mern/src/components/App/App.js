import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Character from "../Characters/Character";
import Heroes from "../Characters/Heroes";
import Home from "../Home/Home";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Header />
        </nav>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/character" component={Character} />
          <Route path="/heroes" component={Heroes} />
        </main>
      </div>
    );
  }
}

export default App;
