import React from "react";

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
              </li>
            );
          })}
      </ul>
    </React.Fragment>
  );
};

export default AccountList;
