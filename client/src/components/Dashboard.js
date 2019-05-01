import React, { Component } from "react";
import JobsDue from "./dashboardWidgets/JobsDue";
import AccountsListContainer from "./dashboardWidgets/AccountsListContainer";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard__page">
        <h2 className="dashboard__page-header">Dashboard</h2>
        <div className="dashboard__page-contents">
          <JobsDue />
          <AccountsListContainer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
