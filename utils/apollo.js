import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { SERVER_URL } from "config";
import fetch from "isomorphic-unfetch";
import withApollo from "next-with-apollo";

const link = createHttpLink({
  fetch,
  uri: `${SERVER_URL}/graphql`,
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
