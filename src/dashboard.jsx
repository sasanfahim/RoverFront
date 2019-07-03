import React, { Component } from "react";
import Rover from "./components/rover";
import Popup from "reactjs-popup";
import http from "./services/httpService";

class Dashboard extends Component {
  state = {
    rovers: [],
    input: ""
  };
  async componentDidMount() {
    const { data } = await http.get("/rovers");
    this.setState({ rovers: data });
  }
  handleChange({ value }) {
    console.log("value", value);
    this.setState({ input: value });
  }

  launchRover = async () => {
    const { input } = this.state;
    await http.post(`/add-rover/${input}`);
    window.location = "/";
  };
  render() {
    return (
      <div>
        <h1>Mars new Rover</h1>
        <hr />

        {this.state.rovers.map(rover => (
          <Rover
            key={rover.state + rover.name}
            name={rover.name}
            state={rover.state}
          />
        ))}

        <hr />
        <Popup
          trigger={
            <button className="btn btn-primary"> Launch New rover</button>
          }
          position="right center"
        >
          <div style={{ width: 200, height: 200 }}>
            New Rover to Mars
            <input
              autoFocus
              type="text"
              onChange={e => this.handleChange(e.target)}
              placeholder="Rover Name"
            />
            <button onClick={this.launchRover} className="btn btn-primary">
              Launch
            </button>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Dashboard;
