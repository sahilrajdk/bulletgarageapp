import gql from "graphql-tag";

export const resolvers = {
  Mutation: {
    updateAccount: (
      _,
      { _id, firstName, lastName, email, phoneNum, __typename },
      { cache }
    ) => {
      const query = gql`
        query {
          currentAccount @client {
            firstName
            lastName
            email
            phoneNum
            _id
          }
        }
      `;
      const previousState = cache.readQuery({ query });

      const data = {
        ...previousState,
        currentAccount: {
          ...previousState.currentAccount,
          firstName,
          lastName,
          email,
          phoneNum,
          __typename,
          _id
        }
      };

      cache.writeData({ query, data });
    }
  }
};
