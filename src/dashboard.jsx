import React, { Component } from "react";
import Rover from "./rover";
import Popup from "reactjs-popup";

class Dashboard extends Component {
  state = {
    rovers: [{ id: 0, name: "" }],
    income: "First"
  };
  handleChange = ({ value }) => {
    const rovers = [...this.state.rovers];

    rovers[0].name = value;

    this.setState({ rovers });
  };

  renderRover = () => {
    this.setState({ income: this.state.rovers[0].name });
  };
  render() {
    return (
      <div>
        <h1>Mars new Rover</h1>
        <hr />
        <Rover income={this.state.income} />

        <hr />
        <Popup
          trigger={
            <button className="btn btn-primary"> Launch New rover</button>
          }
          position="right center"
        >
          <div style={{ width: 100, height: 200 }}>
            New Rover to Mars
            <input
              type="text"
              value={this.state.rovers[0].name}
              onChange={e => this.handleChange(e.currentTarget)}
              placeholder="Rover Name"
            />
            <button onClick={this.renderRover} className="btn btn-primary">
              Launch
            </button>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Dashboard;
