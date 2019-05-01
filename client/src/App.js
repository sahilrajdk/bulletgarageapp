import React, { Component } from "react";

import { ApolloProvider } from "react-apollo";
import "./App.scss";
import { withClientState } from "apollo-link-state";
import Sidebar from "./components/Sidebar";
import gql from "graphql-tag";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";

const cache = new InMemoryCache();
const defaultState = {
  currentAccount: {
    firstName: "a",
    lastName: "b",
    email: "v",
    phoneNum: "",
    __typename: "Account",
    _id: ""
  }
};

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
    Mutation: {
      updateAccount: (
        _,
        { _id, firstName, lastName, email, phoneNum, __typename },
        { cache }
      ) => {
        const query = gql`
          query {
            currentAccount @client {
              firstName
              lastName
              email
              phoneNum
              _id
            }
          }
        `;
        const previousState = cache.readQuery({ query });

        console.log(previousState);

        const data = {
          ...previousState,
          currentAccount: {
            ...previousState.currentAccount,
            firstName,
            lastName,
            email,
            phoneNum,
            __typename,
            _id
          }
        };

        console.log(data);

        cache.writeData({ query, data });
      }
    }
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: `/graphql`
    })
  ]),
  cache
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <div className="app">
            <Sidebar />
            <Main />
            {console.log(cache)}
          </div>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
