import React, { Component } from "react";

import Button from "@material-ui/core/Button";

export default class MaterialUI extends Component {
  state = {
    num: 0,
    playlists: []
  };

  updateNum = () => {
    this.setState({ num: this.state.num + 1 });
  };

  // animationThingy = () => {
  //   const box = 5;

  //   TweenLite.to(box, 5, { left: 0 });
  // };

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.updateNum}>
          <p> Clicks: {this.state.num} </p>
        </Button>
      </div>
    );
  }
}
