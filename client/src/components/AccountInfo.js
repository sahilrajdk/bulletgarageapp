import React, { Component } from "react";
import { Link } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import getCurrentAccount from "../graphql/clientSchema/currentAccount";

const GET_ACCOUNT_INFO = gql`
  query getaccountinfo($id: ID!) {
    getaccountinfo(_id: $id) @client {
      _id
      firstName
      lastName
      email
      phoneNum
      __typename
    }
  }
`;

class AccountInfo extends Component {
  state = {};
  render() {
    console.log(this.props.match.params.accountId);

    return (
      <Query
        query={getCurrentAccount}
        variables={{ _id: this.props.match.params.accountId }}
      >
        {({ loading, error, data }) => {
          if (loading) return "loading..";
          if (error) return "Error..";
          if (data) {
            console.log(data);

            return (
              <div className="account__info-page">
                <div className="account__info-page-details">
                  <h1>Account Info</h1>
                  <h2>{data.currentAccount._id}</h2>
                  <h2> {data.currentAccount.phoneNum}</h2>
                </div>

                <div>
                  <Link
                    className="custom-btn btn-red custom-link"
                    to="/editAccount"
                  >
                    Edit Account
                  </Link>

                  <Link className="custom-btn btn-red custom-link" to="/newJob">
                    New Service
                  </Link>
                </div>
              </div>
            );
          }
        }}
      </Query>
    );
  }
}

export default AccountInfo;
