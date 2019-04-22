import gql from "graphql-tag";

export default gql`
  query {
    currentAccount @client {
      firstName
      lastName
      email
      phoneNum
      __typename
    }
  }
`;
