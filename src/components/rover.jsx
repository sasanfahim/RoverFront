import React, { Component } from "react";

class Rover extends Component {
  style = {
    width: 200,
    height: 70,
    color: "black",
    backgroundColor: "red",
    margin: 15,
    padding: 20
  };
  render() {
    return (
      <div style={this.style}>
        Name : {this.props.name}
        <br />
        State : {this.props.state}
      </div>
    );
  }
}
export default Rover;
