import React, { Component } from "react";
import AccountPage from "./AccountPage";
import NewJob from "./NewJob";
import NewAccount from "./NewAccount";
import Dashboard from "./Dashboard";
import { Route, Switch } from "react-router-dom";

import AccountInfo from "./AccountInfo";
import NewTestComponent from "./NewTestComponent";

class Main extends Component {
  render() {
    return (
      <div className="maincontent">
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/start" component={AccountPage} />
        <Switch>
          <Route path="/newJob/:phoneNum" component={NewJob} />
          <Route path="/newJob" component={NewJob} />
          <Route path="/new-account" component={NewAccount} />
          <Route path="/account/:accountId" component={AccountInfo} />
        </Switch>
      </div>
    );
  }
}

export default Main;
