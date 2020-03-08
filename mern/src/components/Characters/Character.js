import React, { Component } from "react";
import "./Character.css";
import { Link } from "react-router-dom";

const urlC = "http://localhost:8080/character";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    e.preventDefault();
    fetch(urlC)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ data: data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log(this.state.data);
    let characters = this.state.data.map(item => {
      return (
        <div className="character" key={item.id}>
          <div
            class="card text-white bg-primary mb-3"
            style="max-width: 18rem;"
          >
            <div class="card-head">{item.Publisher}</div>
            <div class="card-body">
              <h5 class="card-title">{item.Name}</h5>
              <p class="card-text">{item.Alignment}</p>
              <p class="card-text">{item.Gender}</p>
              <p class="card-text">{item.Race}</p>
            </div>
          </div>
          <div
            class="card text-white bg-secondary mb-3"
            style="max-width: 18rem;"
          >
            <div class="card-header">{item.Publisher}</div>
            <div class="card-body">
              <h5 class="card-title">{item.Name}</h5>
              <p class="card-text">{item.Alignment}</p>
              <p class="card-text">{item.Gender}</p>
              <p class="card-text">{item.Race}</p>
            </div>
          </div>
          <div
            class="card text-white bg-success mb-3"
            style="max-width: 18rem;"
          >
            <div class="card-header">{item.Publisher}</div>
            <div class="card-body">
              <h5 class="card-title">{item.Name}</h5>
              <p class="card-text">{item.Alignment}</p>
              <p class="card-text">{item.Gender}</p>
              <p class="card-text">{item.Race}</p>
            </div>
          </div>
          <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
            <div class="card-header">{item.Publisher}</div>
            <div class="card-body">
              <h5 class="card-title">{item.Name}</h5>
              <p class="card-text">{item.Alignment}</p>
              <p class="card-text">{item.Gender}</p>
              <p class="card-text">{item.Race}</p>
            </div>
          </div>
          <div
            class="card text-white bg-warning mb-3"
            style="max-width: 18rem;"
          >
            <div class="card-header">{item.Publisher}</div>
            <div class="card-body">
              <h5 class="card-title">{item.Name}</h5>
              <p class="card-text">{item.Alignment}</p>
              <p class="card-text">{item.Gender}</p>
              <p class="card-text">{item.Race}</p>
            </div>
          </div>
          <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
            <div class="card-header">{item.Publisher}</div>
            <div class="card-body">
              <h5 class="card-title">{item.Name}</h5>
              <p class="card-text">{item.Alignment}</p>
              <p class="card-text">{item.Gender}</p>
              <p class="card-text">{item.Race}</p>
            </div>
          </div>
          <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
            <div class="card-header">{item.Publisher}</div>
            <div class="card-body">
              <h5 class="card-title">{item.Name}</h5>
              <p class="card-text">{item.Alignment}</p>
              <p class="card-text">{item.Gender}</p>
              <p class="card-text">{item.Race}</p>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default Character;
