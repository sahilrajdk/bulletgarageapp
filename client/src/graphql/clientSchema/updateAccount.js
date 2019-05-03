import gql from "graphql-tag";

export default gql`
  mutation updateAccount(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNum: String!
    $__typename: String!
  ) {
    updateAccount(
      _id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNum: $phoneNum
      __typename: $__typename
    ) @client {
      _id
      firstName
      lastName
      email
      phoneNum
    }
  }
`;
