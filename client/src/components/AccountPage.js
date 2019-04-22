import React, { Component } from "react";
import gql from "graphql-tag";
import { ApolloConsumer } from "react-apollo";
import { Link } from "react-router-dom";
import { graphql, compose } from "react-apollo";
import getCurrentAccount from "../graphql/currentAccount";
import updateAccount from "../graphql/updateAccount";

const GET_ACCOUNT_QUERY = gql`
  query getaccountquery($phoneNum: String!) {
    account(phoneNum: $phoneNum) {
      firstName
      lastName
      email
      __typename
      phoneNum
    }
  }
`;

class AccountPage extends Component {
  state = {
    phoneNumber: "",
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
  };

  render() {
    // const {
    //   currentAccount: { firstName, lastName, phoneNum, email }
    // } = this.props;
    const { updateAccount } = this.props;

    let phoneNum;
    phoneNum = this.state.phoneNumber;
    console.log(phoneNum);
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
                  if (loading) {
                    return <h3>loadin...</h3>;
                  }
                  if (data) {
                    updateAccount({
                      variables: {
                        firstName: "test",
                        lastName: "testing",
                        email: "test@gmail.com",
                        phoneNum: "12345",
                        __typename: "testype"
                      }
                    });
                    this.setState({ accountInfo: data.account, error: "" });
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
