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
    return <div></div>;
  }
}

export default Character;
