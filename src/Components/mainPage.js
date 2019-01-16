import React, { Component } from "react";
import WhoAreWe from "./whoAreWe";
import WhatDoWeDo from "./whatDoWeDo";
import ContactUs from "./contactUs";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <div id="image">
          <div id="opaque-screen">
            <p id="introduction">Welcome to My Portfolio!</p>
          </div>
        </div>
        <div className="nav-bar-1">
          <p>WHO ARE WE?</p>
        </div>
        <WhoAreWe />
        <div className="nav-bar-2">
          <p>WHAT DO WE DO?</p>
        </div>
        <WhatDoWeDo />
        <div className="nav-bar-3">
          <p>CONTACT US!</p>
        </div>
        <ContactUs />
      </div>
    );
  }
}
