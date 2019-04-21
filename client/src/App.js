import React, { Component } from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.scss";

import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="app">
          <Sidebar />
          <Main />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
