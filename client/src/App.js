import React, { Component } from "react";

import { ApolloProvider } from "react-apollo";
import "./App.scss";
import Sidebar from "./components/Sidebar";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

import { resolvers } from "./graphql/resolvers/resolvers";

const cache = new InMemoryCache({});

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: `/graphql`
  }),
  resolvers: resolvers
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {console.log(cache)}
        <ApolloProvider client={client}>
          <div className="app">
            <Sidebar />
            <Main />
          </div>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
