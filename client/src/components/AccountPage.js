import React, { Component } from "react";
import gql from "graphql-tag";
import { Query, ApolloConsumer } from "react-apollo";
import { Link } from "react-router-dom";

const GET_ACCOUNT_QUERY = gql`
  query getaccountquery($phoneNum: String!) {
    account(phoneNum: $phoneNum) {
      firstName
      email
      phoneNum
    }
  }
`;

class AccountPage extends Component {
  state = {
    phoneNumber: "12345678",
    accountInfo: {},
    error: ""
  };

  componentDidUpdate() {}
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchAccount = e => {
    e.preventDefault();
    let phoneNum;
    phoneNum = this.state.phoneNumber;
  };

  render() {
    let phoneNum;
    phoneNum = this.state.phoneNumber;
    return (
      <ApolloConsumer>
        {client => (
          <div className="account__search">
            <form className="account__search-form">
              <label htmlFor="account_search-input">Search Account</label>
              <input
                onChange={this.handleChange}
                id="account_search-input"
                type="text"
                name="phoneNumber"
                placeholder="Enter Phone number"
                value={this.state.phoneNumber}
              />
            </form>
            <button
              className="custom-btn btn-secondary"
              onClick={async () => {
                try {
                  const { data, loading } = await client.query({
                    query: GET_ACCOUNT_QUERY,
                    variables: { phoneNum }
                  });

                  if (data) {
                    this.setState({ accountInfo: data.account, error: "" });
                  }
                } catch (error) {
                  this.setState({
                    error: error.message.replace("GraphQL error:", "").trim()
                  });
                }
              }}
            >
              Search
            </button>
            <div>
              {this.state.accountInfo.phoneNum && (
                <ul className="searchAccountList">
                  <li>
                    {this.state.accountInfo.phoneNum},
                    {this.state.accountInfo.firstName},
                    {this.state.accountInfo.email}
                    <button className="custom-btn btn-primary">
                      <Link to="/newJob">New Service</Link>
                    </button>
                    <button className="custom-btn btn-secondary">
                      <Link to="/newJob">Edit Details</Link>
                    </button>
                  </li>
                </ul>
              )}
              {this.state.error && (
                <div>
                  <p>{this.state.error}</p>
                  <button className="custom-btn btn-secondary">
                    New Account
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </ApolloConsumer>
    );
  }
}

export default AccountPage;
