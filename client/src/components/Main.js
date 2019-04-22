import React, { Component } from "react";
import AccountPage from "./AccountPage";
import NewJob from "./NewJob";
import NewAccount from "./NewAccount";
import { BrowserRouter, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="maincontent">{this.props.children}</div>
      </BrowserRouter>
    );
  }
}

export default Main;
