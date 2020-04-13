import React, { Component } from "react";
import "./Character.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Powers from "./Powers";
import Client from "../Client/Client.js";

const urlC = "https://heroes-and-villains-bb.herokuapp.com/character";

class Character extends Component {
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
      const client = new Client(); // Create new instance of client
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

  // findPowers = () => {
  //   this.state.powers.map(item => {
  //     return <p>{item.Powers}</p>;
  //   });
  // };

  render() {
    // console.log(this.state.data);
    // let powers = this.state.data.map(function(item) {
    //   return item.Powers;
    // });
    let powersInfo = this.findPowers;
    const character = this.state.characters[0];
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
                  <Card.Body>
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

export default Character;

{
  /* <Card bg="primary" text="white" style={{ width: "18rem" }}>
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.Alignment}</Card.Text>
              <Card.Text>{item.Race}</Card.Text>
              <Card.Text>{item.Gender}</Card.Text>
            </Card.Body>
          </Card>
          <br /> */
}
{
  /* <Card bg="secondary" text="primary" style={{ width: "18rem" }}>
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.Alignment}</Card.Text>
              <Card.Text>{item.Race}</Card.Text>
              <Card.Text>{item.Gender}</Card.Text>
            </Card.Body>

            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Card>
          <br /> */
}
{
  /* <Card bg="success" text="white" style={{ width: "18rem" }}>
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.Alignment}</Card.Text>
              <Card.Text>{item.Race}</Card.Text>
              <Card.Text>{item.Gender}</Card.Text>
            </Card.Body>
          </Card>
          <br /> */
}
{
  /* <Card bg="danger" text="white" style={{ width: "18rem" }}>
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.Alignment}</Card.Text>
              <Card.Text>{item.Race}</Card.Text>
              <Card.Text>{item.Gender}</Card.Text>
            </Card.Body>
          </Card> */
}
{
  /* <Card bg="warning" text="white" style={{ width: "18rem" }}>
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.Alignment}</Card.Text>
              <Card.Text>{item.Race}</Card.Text>
              <Card.Text>{item.Gender}</Card.Text>
            </Card.Body>
          </Card>
          <br /> */
}
{
  /* <Card bg="info" text="white" style={{ width: "18rem" }}>
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.Alignment}</Card.Text>
              <Card.Text>{item.Race}</Card.Text>
              <Card.Text>{item.Gender}</Card.Text>
            </Card.Body>
          </Card>
          <br />  */
}
