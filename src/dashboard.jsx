import React, { Component } from "react";
import Rover from "./rover";
import Popup from "reactjs-popup";

class Dashboard extends Component {
  state = {
    rovers: [{ id: 0, name: "First" }],
    income: ""
  };
  handleChange = ({ value }) => {
    this.setState({ income: value });
  };

  renderRover = () => {
    const rovers = [...this.state.rovers];
    const temp = { id: 0, name: "" };
    temp.id++;
    temp.name = this.state.income;
    rovers.push(temp);
    this.setState({ rovers });
  };
  render() {
    return (
      <div>
        <h1>Mars new Rover</h1>
        <hr />

        {this.state.rovers.map(rover => (
          <Rover key={rover.name} rov={rover.name} />
        ))}

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
              value={this.state.income}
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
