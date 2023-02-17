import POSTS from "@/apollo/queries/posts";
import PropTypes from "prop-types";
import React from "react";

import Card from "@/components/Card/Card";
import Layout from "@/components/Layouts/Layout";

// import Query from "@/components/query";
import { addApolloState, initializeApollo } from "@/utils/apollo";

const Blog = ({ data }) => {
  return (
    <Layout>
      <div className="py-32 px-3 lg:px-20">
        {/* <Query query={POSTS}>
          {({ data }) => {
            return ( */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {data &&
            data?.posts?.data.map((item) => {
              // const { title, Date, images } = item.attributes;
              return <Card key={item.id} id={item.id} {...item.attributes} />;
            })}
        </div>
        {/* );
          }}
        </Query> */}
      </div>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.object,
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const res = await apolloClient.query({
    query: POSTS,
  });

  return addApolloState(apolloClient, {
    props: {
      data: res?.data,
    },
    revalidate: 1,
  });
}

export default Blog;
