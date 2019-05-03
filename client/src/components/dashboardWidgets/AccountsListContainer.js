import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import AccountList from "./AccountList";

const GET_ACCOUNTS_QUERY = gql`
  query accounts($offset: Int!, $limit: Int!, $sort: String!) {
    accounts(offset: $offset, limit: $limit, sort: $sort) {
      firstName
      lastName
      email
      __typename
      phoneNum
      _id
    }
  }
`;

class AccountsListContainer extends Component {
  toggleSort = () => {
    const currentSort = this.state.sort;
    let updatedSort;

    if (currentSort === "firstName") {
      updatedSort = "-firstName";
    } else {
      updatedSort = "firstName";
    }

    this.setState({
      sort: updatedSort
    });
  };

  render() {
    return (
      <div className="dashboard__accounts-widget">
        <h3>ACCOUNTS</h3>
        <Query
          query={GET_ACCOUNTS_QUERY}
          variables={{
            offset: 0,
            limit: 5,
            sort: "-firstName"
          }}
        >
          {({ loading, error, data, fetchMore, client }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            client.writeData({ data: { accounts: data.accounts } });

            return (
              <div>
                <AccountList
                  data={data}
                  onLoadMore={() =>
                    fetchMore({
                      variables: {
                        offset: data.accounts.length
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) return prev;
                        return Object.assign({}, prev, {
                          accounts: [
                            ...prev.accounts,
                            ...fetchMoreResult.accounts
                          ]
                        });
                      }
                    })
                  }
                />
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default AccountsListContainer;
