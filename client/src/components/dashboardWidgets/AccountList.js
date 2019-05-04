import React from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { ApolloConsumer } from "react-apollo";

const AccountList = props => {
  return (
    <React.Fragment>
      <ul className="accounts__List">
        <button
          className="custom-btn btn-secondary widget-btn"
          onClick={props.onLoadMore}
        >
          LoadMore
        </button>
        {props.data &&
          props.data.accounts.map(account => {
            return (
              <li key={account._id}>
                {account.firstName} -- {account.phoneNum}
                <Link
                  className="custom-link btn-inline btn-primary ml-1"
                  to={`/newJob/${account.phoneNum}`}
                >
                  New Service
                </Link>
              </li>
            );
          })}
      </ul>
    </React.Fragment>
  );
};

export default AccountList;
