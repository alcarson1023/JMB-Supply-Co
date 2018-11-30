import React, { Component } from "react";
import "./reset.css";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <div id="image">
          <div id="opaque-screen">
            <p id="introduction">
              This is a test of the presidential alert system
            </p>
          </div>
        </div>
        <div className="nav-bar-1">
          <p>WHO ARE WE?</p>
        </div>
        <div className="content">
          <div className="text">
            <h1>
              We offer one-on-one personal fitness solutions. With over 30 years
              of combined experience, we can help you achieve your goals safely
              and quickly!
            </h1>
          </div>
        </div>
        <div className="nav-bar-2">
          <p>WHAT DO WE DO?</p>
        </div>
        <div className="content">
          <div className="text">
            <p>
              We provide a variety of personalized goals and stratigies that are
              always adapting (just like you)! As you grow and progress, we'll
              make sure your time at the gym stays as productive as possibles.
              We'll help you see your best self sooner and with less
              frustration, garuanteed!
            </p>
          </div>
        </div>
        <div className="nav-bar-3">
          <p>CONTACT US!</p>
        </div>
        <div className="content">
          <div className="text">
            <p>
              Enter your contact information below along with a quick
              description of your fitness goals. We'll get in touch with you
              soon to schedule a free consultation!
            </p>
          </div>
          <input />
        </div>
      </div>
    );
  }
}

export default App;
