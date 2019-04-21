import React, { Component } from "react";
import AccountPage from "./AccountPage";
import NewJob from "./NewJob";
import { BrowserRouter, Link, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="maincontent">
          <Route exact path="/" component={AccountPage} />
          <Route path="/newJob" component={NewJob} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
