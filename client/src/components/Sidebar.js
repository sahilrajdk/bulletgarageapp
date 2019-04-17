import React, { Component } from "react";

const MENU_ITEMS = [
  "NEW JOB",
  "VIEW JOBS",
  <i className="fas fa-search">
    <span>Search</span>
  </i>
];

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__logo">
          <img src={require("../img/logo.png")} alt="logo" />
        </div>

        <ul className="sidebar__list">
          {MENU_ITEMS.map(item => (
            <li key={item} className="sidebar__list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
