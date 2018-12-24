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
            <p id="introduction">Welcome to JMB Supply Co.</p>
          </div>
        </div>
        <div className="nav-bar-1">
          <p>WHO ARE WE?</p>
        </div>
        <div className="content">
          <div className="text">
            <h1>
              We are an all American business dedicated to helping you find the
              right tools for the job. Whether you need one piece or a hundred,
              you can contact us below for a free estimate. We look forward to
              working with you!
            </h1>
          </div>
        </div>
        <div className="nav-bar-2">
          <p>WHAT DO WE DO?</p>
        </div>
        <div className="content">
          <div className="text">
            <p>
              We're a small team of devoted individuals with years of experience
              working with tools. From valves to vices, we can help you find the
              piece you're looking for!
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
              description of what you're looking for. We'll get in touch with
              you within 48 hours!
            </p>
          </div>
          <input placeholder="Email address" />
          <br />
          <input id="supplyInput" placeholder="Supplies needed" />
        </div>
      </div>
    );
  }
}

export default App;
