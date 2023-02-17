import { GETPOSTBYSLUG } from "@/apollo/queries/post";
import { POSTSSLUG } from "@/apollo/queries/posts";
import Error from "next/error";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

import Article from "@/components/Article/Article";
import Layout from "@/components/Layouts/Layout";

// import Query from "@/components/query";
import { addApolloState, initializeApollo } from "@/utils/apollo";
import markdownToHtml from "@/utils/markdownToHtml";

const Post = ({ slug, content, data }) => {
  if (!content) {
    return <Error statusCode={404} />;
  }
  return (
    <Layout>
      <div className="py-32 px-3 lg:px-20">
        {/* <Query query={GETPOSTBYSLUG} variables={{ slug: slug }}>
          {({ data }) => {
            return ( */}
        <>
          <Head>
            <title>Город на Исети - Новости - {data.posts.data[0].attributes.title}</title>

            <meta property="og:title" content={data.posts.data[0].attributes.title} />

            <meta property="og:locale" content="ru_RU" />

            <meta property="og:type" content="website" />

            <meta name="description" content={data.posts.data[0].attributes.description} />

            <meta property="og:description" content={data.posts.data[0].attributes.description} />
          </Head>
          <Article post={data.posts.data[0].attributes} content={content} />;
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
  data: PropTypes.object,
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const postsId = await apolloClient
    .query({
      query: POSTSSLUG,
    })
    .then((res) => res?.data?.posts?.data || [])
    .catch(() => []);

  const paths = postsId.map((item) => {
    return { params: { slug: item.attributes.slug } };
  });

  return {
    paths: paths,
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  const postsData = await apolloClient
    .query({
      query: GETPOSTBYSLUG,
      variables: {
        slug: params.slug,
      },
    })
    .then((res) => res);

  const postData = postsData?.data?.posts?.data[0] || {};
  if (!postData?.attributes?.article) {
    return {
      notFound: true,
    };
  }
  const content = await markdownToHtml(postData?.attributes?.article);

  return addApolloState(apolloClient, {
    props: {
      slug: params.slug,
      content,
      data: postsData?.data,
    },
    revalidate: 1,
  });
}

export default Post;
