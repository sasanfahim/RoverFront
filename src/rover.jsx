import React, { Component } from "react";

class Rover extends Component {
  style = {
    width: 100,
    height: 70,
    color: "black",
    backgroundColor: "red",
    margin: 15,
    padding: 20
  };
  render() {
    return <div style={this.style}>{this.props.rov}</div>;
  }
}
export default Rover;
