import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import React from "react";

const Query = ({ children, query, variables }) => {
  const { data, loading, error } = useQuery(query, { variables });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

Query.propTypes = {
  children: PropTypes.func,
  query: PropTypes.object,
  variables: PropTypes.object,
};
export default Query;
