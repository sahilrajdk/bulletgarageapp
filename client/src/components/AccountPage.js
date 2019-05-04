import React, { Component } from "react";
import gql from "graphql-tag";
import { ApolloConsumer } from "react-apollo";
import { Link } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import getCurrentAccount from "../graphql/clientSchema/currentAccount";
import updateAccount from "../graphql/clientSchema/updateAccount";
import Spinner from "./utils/Spinner";

const GET_ACCOUNT_QUERY = gql`
  query getaccountquery($phoneNum: String!) {
    account(phoneNum: $phoneNum) {
      firstName
      lastName
      email
      __typename
      phoneNum
      _id
    }
  }
`;

class AccountPage extends Component {
  state = {
    phoneNumber: "",
    accountInfo: {},
    errors: []
  };

  componentDidUpdate() {}
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchAccount = e => {
    e.preventDefault();
  };

  render() {
    const { firstName, lastName, phoneNum, email } = this.state.accountInfo;

    let searchPhoneNum;
    searchPhoneNum = this.state.phoneNumber;

    return (
      <ApolloConsumer>
        {client => (
          <div className="account__search">
            <label htmlFor="account_search-input">Search Account</label>

            <div className="form-group">
              <input
                onChange={this.handleChange}
                id="account_search-input"
                type="text"
                name="phoneNumber"
                placeholder="Enter Phone number"
                value={this.state.phoneNumber}
              />
              <button
                className="custom-btn btn-secondary btn-inline"
                onClick={async () => {
                  try {
                    const { data, loading, error } = await client.query({
                      query: GET_ACCOUNT_QUERY,
                      variables: { phoneNum: searchPhoneNum }
                    });
                    if (loading) {
                      return <Spinner />;
                    }
                    if (data) {
                      console.log(data.account._id);

                      this.setState({ accountInfo: data.account });
                    }
                    if (error) {
                      console.log(error.graphQLErrors);
                      this.setState({ errors: error });
                    }
                  } catch (err) {
                    console.log(err);
                    this.setState({
                      error: err.message.replace("GraphQL error:", "").trim()
                    });
                  }
                }}
              >
                Search
              </button>
            </div>
            <div>
              {this.state.accountInfo.phoneNum && (
                <ul className="searchAccountList">
                  <li>
                    {phoneNum},{firstName},{email}
                    <button className="custom-btn btn-primary">
                      <Link to={`/newJob/${phoneNum}`}>New Service</Link>
                    </button>
                    <button className="custom-btn btn-secondary">
                      <Link to="/editCustomer">Edit Details</Link>
                    </button>
                  </li>
                </ul>
              )}
              {this.state.error && (
                <div>
                  <p>{this.state.error}</p>
                  <Link className="custom-btn btn-secondary" to="/new-account">
                    {" "}
                    New Account
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}

export default compose(
  graphql(getCurrentAccount, {
    props: ({ data: currentAccount }) => ({
      currentAccount
    })
  }),
  graphql(updateAccount, { name: "updateAccount" })
)(AccountPage);
