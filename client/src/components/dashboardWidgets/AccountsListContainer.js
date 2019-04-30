import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import AccountList from "./AccountList";

const GET_ACCOUNTS_QUERY = gql`
  query accounts($offset: Int!, $limit: Int!) {
    accounts(offset: $offset, limit: $limit) {
      firstName
      lastName
      email
      __typename
      phoneNum
      _id
    }
  }
`;

const AccountsListContainer = () => (
  <div className="dashboard__accounts-widget">
    <h3>ACCOUNTS</h3>
    <Query
      query={GET_ACCOUNTS_QUERY}
      variables={{
        offset: 0,
        limit: 5
      }}
    >
      {({ loading, error, data, fetchMore }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        if (data) {
          console.log(data);
          return (
            <AccountList
              data={data}
              onLoadMore={() =>
                fetchMore({
                  variables: {
                    offset: data.accounts.length
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    console.log("abc");
                    if (!fetchMoreResult) return prev;
                    return Object.assign({}, prev, {
                      accounts: [...prev.accounts, ...fetchMoreResult.accounts]
                    });
                  }
                })
              }
            />
          );
        }
      }}
    </Query>
  </div>
);

export default AccountsListContainer;
