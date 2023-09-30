import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

import Card from "@/components/Card/Card";
import Layout from "@/components/Layouts/Layout";
import posts from "@/components/data/posts.json";

const Blog = ({ data }) => {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Город на Исети - Новости</title>
        <meta property="og:title" content="Город на Исети - Новости" />

        <meta property="og:locale" content="ru_RU" />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://iset.city" />
        <meta
          property="og:image"
          content="https://iset.city/_ipx/w_640,q_75/%2Fheader2.jpg?url=%2Fheader2.jpg&w=640&q=75"
        />
      </Head>
      <div className="py-32 px-3 lg:px-20">
        {/* <Query query={POSTS}>
          {({ data }) => {
            return ( */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {posts?.data.map((item) => {
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

// export async function getStaticProps() {
//   const apolloClient = initializeApollo();

//   const res = await apolloClient.query({
//     query: POSTS,
//   });

//   return addApolloState(apolloClient, {
//     props: {
//       data: res?.data,
//     },
//     revalidate: 1,
//   });
// }

export default Blog;
