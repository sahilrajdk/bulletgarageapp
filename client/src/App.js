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

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      account: (_, args, { getCacheKey }) =>
        console.log(getCacheKey({ __typename: "Account", id: args._id }))
    }
  }
});

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: `http://localhost:5000/graphql`
  }),
  resolvers: resolvers
});

// cache.writeData({
//   data: {
//     currentAccount: {
//       firstName: "cachedeffirstname",
//       lastName: "cachedeflastname",
//       email: "cacheemail@gmail.com",
//       phoneNum: "11111111",
//       __typename: "Account",
//       _id: "1111222223333333"
//     }
//   }
// });

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
