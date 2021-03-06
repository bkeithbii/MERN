import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Character from "../Characters/Character";
import Heroes from "../Characters/Heroes";
import Home from "../Home/Home";
import Villains from "../Characters/Villains";
import Males from "../Characters/Males";
import Females from "../Characters/Females";
import Humans from "../Characters/Humans";
import Mutants from "../Characters/Mutants";
import Unknowns from "../Characters/Unknowns";
import Marvel from "../Characters/Marvel";
import DC from "../Characters/DC";

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
          <Route path="/males" component={Males} />
          <Route path="/females" component={Females} />
          <Route path="/humans" component={Humans} />
          <Route path="/mutants" component={Mutants} />
          <Route path="/unknowns" component={Unknowns} />
          <Route path="/marvelcomics" component={Marvel} />
          <Route path="/dccomics" component={DC} />
        </main>
      </div>
    );
  }
}

export default App;
