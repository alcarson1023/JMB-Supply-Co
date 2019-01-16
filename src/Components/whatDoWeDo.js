import React, { Component } from "react";

import MovingButtons from "./whatDoWeDo-components/MovingButtons";

export default class WhatDoWeDo extends Component {
  state = {};

  render() {
    return (
      <div>
        {/* <div className="nav-bar-2">
          <p>WHAT DO WE DO?</p>
        </div> */}
        <div className="darkBar" />
        <div className="content-2">
          <div className="opaqueFade">
            <div className="text">
              <MovingButtons />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
