import React, { Component } from "react";
import AccountPage from "./AccountPage";
import NewJob from "./NewJob";
import NewAccount from "./NewAccount";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="maincontent">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/start" component={AccountPage} />
        <Route path="/newJob" component={NewJob} />
        <Route path="/new-account" component={NewAccount} />
      </div>
    );
  }
}

export default Main;
