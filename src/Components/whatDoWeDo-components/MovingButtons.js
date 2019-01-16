import React, { Component } from "react";

import axios from "axios";

export default class MovingButtons extends Component {
  state = {
    position: 0,
    paradise: true,
    playlists: []
  };

  componentDidMount() {
    console.log("componentDidMount");

    axios.get("/api/all_playlists").then(response => {
      this.setState({ playlists: response.data });
      console.log("All playlists: ", response.data);
    });
  }

  button1 = () => {
    this.setState({ position: 1 });
  };

  button2 = () => {
    this.setState({ position: 2 });
  };

  button3 = () => {
    this.setState({ position: 3 });
  };

  render() {
    return (
      <div>
        {this.state.position === 1 ? (
          <div className="movingPiece-left">To the left!</div>
        ) : this.state.position === 2 ? (
          <div className="movingPiece">In the middle!</div>
        ) : this.state.position === 3 ? (
          <div className="movingPiece-right">To the right!</div>
        ) : (
          <div className="movingPiece">
            <p> Pick a Position! </p>
          </div>
        )}
        <div className="buttons">
          <button type="button" className="moveButton" onClick={this.button1}>
            Left!
          </button>

          <button type="button" className="moveButton" onClick={this.button2}>
            Center!
          </button>
          <button type="button" className="moveButton" onClick={this.button3}>
            Right!
          </button>
        </div>
      </div>
    );
  }
}
