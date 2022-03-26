import { ApolloProvider } from "@apollo/react-hooks";
import PropTypes from "prop-types";

import withData from "@/utils/apollo";

import "../styles/globals.css";

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  apollo: PropTypes.any,
};

export default withData(MyApp);
