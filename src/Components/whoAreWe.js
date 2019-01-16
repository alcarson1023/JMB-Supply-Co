import React, { Component } from "react";
import { TweenLite } from "gsap";
import axios from "axios";

export default class WhoAreWe extends Component {
  constructor(props) {
    super(props);
    this.myElements = [];
    this.myTween = null;
  }
  componentDidMount() {
    console.log(this.myElements);

    axios.get("/api/all_playlists").then(response => {
      this.setState({ playlists: response.data });
      console.log("All playlists: ", response.data);
    });
  }
  state = {
    num: 0,
    playlists: []
  };

  updateNum = () => {
    this.setState({ num: this.state.num + 1 });
  };

  animationThingy = () => {
    const box = 5;

    TweenLite.to(box, 5, { left: 0 });
  };

  render() {
    // testing();

    return (
      <div>
        {/* <div className="nav-bar-1">
          <p>WHO ARE WE?</p>
        </div> */}
        <div className="content-1">
          <div className="opaqueFade">
            <div className="text">
              <h1>Cool animations go here</h1>
            </div>
            <div>
              <button type="button" onClick={this.updateNum}>
                Testing: {this.state.num}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
