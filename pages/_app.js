import { ApolloProvider } from "@apollo/react-hooks";
import PropTypes from "prop-types";

import { useApollo } from "@/utils/apollo";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  apollo: PropTypes.any,
};

export default MyApp;
