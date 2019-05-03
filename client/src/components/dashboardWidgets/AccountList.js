import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { ApolloConsumer } from "react-apollo";

const AccountList = props => {
  return (
    <React.Fragment>
      <button
        className="custom-btn btn-secondary widget-btn"
        onClick={props.onLoadMore}
      >
        LoadMore
      </button>
      <ul className="accounts__List">
        {props.data &&
          props.data.accounts.map(account => {
            return (
              <li key={account._id}>
                {account.firstName} -- {account.phoneNum}
                <Link to={`/newJob/${account.phoneNum}`}>New Service</Link>
              </li>
            );
          })}
      </ul>
    </React.Fragment>
  );
};

export default AccountList;
