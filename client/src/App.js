import React, { Component } from "react";
import "./App.scss";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
