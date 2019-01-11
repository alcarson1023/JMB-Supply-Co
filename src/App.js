import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import ReactComponent from "./component";
// import { MuiThemeProvider } from "material-ui/core/MuiThemeProvider";

class App extends Component {
  state = {};

  render() {
    return (
      // <MuiThemeProvider>
      <ReactComponent />
      // </MuiThemeProvider>
    );
  }
}

export default App;
