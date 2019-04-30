import React from "react";

const AccountList = props => {
  return (
    <ul className="accounts__List">
      <button className="custom-btn btn-secondary" onClick={props.onLoadMore}>
        LoadMore
      </button>
      {props.data &&
        props.data.accounts.map(account => {
          return (
            <li key={account._id}>
              {account.firstName} -- {account.phoneNum}
            </li>
          );
        })}
    </ul>
  );
};

export default AccountList;
