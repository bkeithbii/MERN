import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";

class Powers extends Component {
  parseValidPowers(powers) {
    return Object.keys(powers[0])
      .filter(function (key) {
        return key !== "Name";
      })
      .filter(function (key) {
        return key !== "_id";
      })
      .map((key) => {
        return <p>{key}</p>;
      });
  }

  render() {
    if (this.props.powers) {
      return (
        <div>
          <ul>{this.parseValidPowers(this.props.powers)}</ul>
        </div>
      );
    }
    return <div>No Powers</div>;
  }
}

export default Powers;
