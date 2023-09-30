import { GETPOSTBYSLUG } from "@/apollo/queries/post";
import find from "lodash/find";
// import { POSTSSLUG } from "@/apollo/queries/posts";
import Error from "next/error";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

import Article from "@/components/Article/Article";
import Layout from "@/components/Layouts/Layout";
import posts from "@/components/data/posts.json";

// import Query from "@/components/query";
import { addApolloState, initializeApollo } from "@/utils/apollo";
import markdownToHtml from "@/utils/markdownToHtml";

const Post = ({ slug, content, postData }) => {
  if (!content) {
    return <Error statusCode={404} />;
  }

  const imgUri =
    postData?.attributes?.images?.data.length > 0
      ? postData.attributes.images.data[0].attributes.url
      : "https://iset.city/_ipx/w_640,q_75/%2Fheader2.jpg?url=%2Fheader2.jpg&w=640&q=75";
  return (
    <Layout>
      <div className="py-32 px-3 lg:px-20">
        {/* <Query query={GETPOSTBYSLUG} variables={{ slug: slug }}>
          {({ data }) => {
            return ( */}
        <>
          <Head>
            <title>Город на Исети - Новости - {postData.attributes.title}</title>

            <meta property="og:title" content={postData.attributes.title} />

            <meta property="og:locale" content="ru_RU" />

            <meta property="og:type" content="website" />

            <meta name="description" content={postData.attributes.description} />

            <meta property="og:description" content={postData.attributes.description} />

            <meta property="og:image" content={imgUri} />
          </Head>
          <Article post={postData.attributes} content={content} />;
        </>
        {/* );
          }}
        </Query> */}
      </div>
    </Layout>
  );
};

Post.propTypes = {
  slug: PropTypes.string,
  content: PropTypes.string,
  postData: PropTypes.object,
};

export async function getStaticPaths() {
  // const apolloClient = initializeApollo();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  // const postsId = await apolloClient
  //   .query({
  //     query: POSTSSLUG,
  //   })
  //   .then((res) => res?.data?.posts?.data || [])
  //   .catch(() => []);

  const paths = posts.data.map((item) => {
    return { params: { slug: item.attributes.slug } };
  });

  return {
    paths: paths,
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  // const apolloClient = initializeApollo();

  // const postsData = await apolloClient
  //   .query({
  //     query: GETPOSTBYSLUG,
  //     variables: {
  //       slug: params.slug,
  //     },
  //   })
  //   .then((res) => res);

  const postData = find(posts.data, (item) => item.attributes.slug === params.slug) || {};

  // const postData = postsData?.data?.posts?.data[0] || {};
  if (!postData?.attributes?.article) {
    return {
      notFound: true,
    };
  }
  const content = await markdownToHtml(postData?.attributes?.article);

  return {
    props: {
      slug: params.slug,
      content,
      postData,
    },
  };
}

export default Post;
