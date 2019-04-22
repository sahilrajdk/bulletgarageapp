import React, { Component } from "react";

import { ApolloProvider } from "react-apollo";
import "./App.scss";
import { withClientState } from "apollo-link-state";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import gql from "graphql-tag";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { BrowserRouter, Route } from "react-router-dom";
import AccountPage from "./components/AccountPage";
import NewJob from "./components/NewJob";
import NewAccount from "./components/NewAccount";

const cache = new InMemoryCache();
const defaultState = {
  currentAccount: {
    firstName: "a",
    lastName: "b",
    email: "v",
    phoneNum: "",
    __typename: "Account"
  }
};

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
    Mutation: {
      updateAccount: (
        _,
        { firstName, lastName, email, phoneNum, __typename },
        { cache }
      ) => {
        const query = gql`
          query {
            currentAccount @client {
              firstName
              lastName
              email
              phoneNum
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
            __typename
          }
        };
        cache.writeData({ query, data });
      }
    }
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([
    stateLink,
    new HttpLink({
      uri: "http://localhost:5000/graphql"
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
            <div className="maincontent">
              <Route exact path="/" component={AccountPage} />
              <Route path="/newJob" component={NewJob} />
              <Route path="/new-account" component={NewAccount} />
            </div>
            {console.log(cache)}
          </div>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
