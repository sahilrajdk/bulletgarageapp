import React from "react";
import gql from "graphql-tag";

const GET_ACCOUNT = gql`
  query Account($phoneNum: String!) {
    account(phoneNum: $phoneNum) {
      firstName
      lastName
    }
  }
`;

// const NewTestComponent = props => {
//   console.log(props.match.params.phoneNum);
//   return <div>{console.log(props)}</div>;
// };

// export default graphql(GET_ACCOUNT, {
//   options: props => ({
//     variables: {
//       phoneNum: props.match.params.phoneNum
//     }
//   })
// })(NewTestComponent);
