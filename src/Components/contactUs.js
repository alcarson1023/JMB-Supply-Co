import React, { Component } from "react";

export default class ContactUs extends Component {
  state = {};

  render() {
    return (
      <div>
        {/* <div className="nav-bar-3">
          <p>CONTACT US!</p>
        </div> */}
        <div className="content-3">
          <div className="opaqueFade">
            <div className="text">
              <p id="lastBox">
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
      </div>
    );
  }
}
