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
      data: []
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
          <Card bg="dark" text="white" style={{ width: "18rem" }}>
            <Card.Header>{item.Publisher}</Card.Header>
            <Card.Body>
              <Card.Title>{item.Name}</Card.Title>
              <Card.Text>{item.Alignment}</Card.Text>
              <Card.Text>{item.Race}</Card.Text>
              <Card.Text>{item.Gender}</Card.Text>
            </Card.Body>

            <Accordion>
              <Card className="accordion">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
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
