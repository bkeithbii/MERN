import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Character from "../Characters/Character";
import Heroes from "../Characters/Heroes";
import Home from "../Home/Home";
import Villains from "../Characters/Villains";

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
          <Route path="/villains" component={Villains} />
          {/* <Route path="/males" component={Males} />
          <Route path="/females" component={Females} />
          <Route path="/humans" component={Humans} />
          <Route path="/mutants" component={Mutants} />
          <Route path="/aliens" component={Aliens} />
          <Route path="/marvelcomics" component={Marvel} />
          <Route path="/dccomics" component={DC} /> */}
        </main>
      </div>
    );
  }
}

export default App;
