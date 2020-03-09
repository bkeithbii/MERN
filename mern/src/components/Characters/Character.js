import React, { Component } from "react";
import "./Character.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const urlC = "http://localhost:8080/character";

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      powers: []
    };
  }

  componentDidMount() {
    fetch(urlC)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        // console.log(data);
        this.setState({ data: data });
        this.setState({ powers: data.map(item => item.Powers) });

        // console.log(`${Array.isArray(this.state.powers)}`);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log(this.state.data);
    // let powers = this.state.data.map(function(item) {
    //   return item.Powers;
    // });
    let characters = this.state.data.map(item => {
      return (
        <div className="character" key={item.id}>
          {/* <Card bg="primary" text="white" style={{ width: "18rem" }}>
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.Alignment}</Card.Text>
              <Card.Text>{item.Race}</Card.Text>
              <Card.Text>{item.Gender}</Card.Text>
            </Card.Body>
          </Card>
          <br /> */}
          {/* <Card bg="secondary" text="primary" style={{ width: "18rem" }}>
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
          <br /> */}
          {/* <Card bg="success" text="white" style={{ width: "18rem" }}>
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.Alignment}</Card.Text>
              <Card.Text>{item.Race}</Card.Text>
              <Card.Text>{item.Gender}</Card.Text>
            </Card.Body>
          </Card>
          <br /> */}
          {/* <Card bg="danger" text="white" style={{ width: "18rem" }}>
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.Alignment}</Card.Text>
              <Card.Text>{item.Race}</Card.Text>
              <Card.Text>{item.Gender}</Card.Text>
            </Card.Body>
          </Card> */}
          {/* <Card bg="warning" text="white" style={{ width: "18rem" }}>
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.Alignment}</Card.Text>
              <Card.Text>{item.Race}</Card.Text>
              <Card.Text>{item.Gender}</Card.Text>
            </Card.Body>
          </Card>
          <br /> */}
          {/* <Card bg="info" text="white" style={{ width: "18rem" }}>
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.Alignment}</Card.Text>
              <Card.Text>{item.Race}</Card.Text>
              <Card.Text>{item.Gender}</Card.Text>
            </Card.Body>
          </Card>
          <br />  */}
          <Card
            bg="dark"
            text="white"
            style={{ width: "18rem" }}
            className="text-center"
          >
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>Status: {item.Alignment}</Card.Text>
              <Card.Text>Race: {item.Race}</Card.Text>
              <Card.Text>Gender: {item.Gender}</Card.Text>
            </Card.Body>

            <Accordion>
              <Card className="accordion">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Powers
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body></Card.Body>
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
