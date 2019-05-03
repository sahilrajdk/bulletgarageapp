import React, { Component } from "react";
import { Link } from "react-router-dom";

const MENU_ITEMS = [
  { name: "HOME", link: "/" },
  { name: "NEW JOB", link: "/start" },
  { name: "NEW ACCOUNT", link: "/new-account" }
];

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__logo">
          <img src={require("../img/logo.png")} alt="logo" />
        </div>

        <ul className="sidebar__list">
          {MENU_ITEMS.map((item, index) => (
            <Link to={item.link} key={index} className="sidebar__list-item">
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
