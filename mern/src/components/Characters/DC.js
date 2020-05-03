import React, { Component } from "react";
import "./Character.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Powers from "./Powers";
import dcClient from "../Clients/dcClient";

class DC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      powers: [],
      characters: [],
    };
  }

  async componentDidMount() {
    try {
      const client = new dcClient(); // Create new instance of client
      const data = await client.fetchCharacters(); // Fetch characters from API returns resolved json
      this.setState({ data }); // Update state with new data
      this.setState({ characters: data.map((item) => item) });
      this.setState({
        powers: this.state.characters.map((character) => character.Powers),
      });

      console.log(JSON.stringify(this.state.powers, null, 2));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let characters = this.state.characters.map((character) => {
      return (
        <div className="character" key={character.id}>
          <Card
            key={character.id}
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
            className="text-center"
          >
            <Card.Header>{character.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{character.Name}</Card.Title>
              <Card.Text>Status: {character.Alignment}</Card.Text>
              <Card.Text>Race: {character.Race}</Card.Text>
              <Card.Text>Gender: {character.Gender}</Card.Text>
            </Card.Body>

            <Accordion key={character.id}>
              <Card className="accordion">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  View Powers
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="powers">
                    {" "}
                    <Powers powers={character.Powers}></Powers>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Card>
          <br />
        </div>
      );
    });
    return <div className="characterContainer">{characters}</div>;
  }
}

export default DC;
