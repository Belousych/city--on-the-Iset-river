import { GETPOSTBYSLUG } from "@/apollo/queries/post";
import { POSTSSLUG } from "@/apollo/queries/posts";
import PropTypes from "prop-types";
import React from "react";

import Article from "@/components/Article/Article";
import Layout from "@/components/Layouts/Layout";
import Query from "@/components/query";

import { addApolloState, initializeApollo } from "@/utils/apollo";
import markdownToHtml from "@/utils/markdownToHtml";

const Post = ({ slug, content }) => {
  return (
    <Layout>
      <div className="py-32 px-20">
        <Query query={GETPOSTBYSLUG} variables={{ slug: slug }}>
          {({ data }) => {
            return <Article post={data.posts.data[0].attributes} content={content} />;
          }}
        </Query>
      </div>
    </Layout>
  );
};

Post.propTypes = {
  slug: PropTypes.string,
  content: PropTypes.string,
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
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();

  const postData = await apolloClient
    .query({
      query: GETPOSTBYSLUG,
      variables: {
        slug: params.slug,
      },
    })
    .then((res) => res?.data?.posts?.data[0] || {});

  const content = await markdownToHtml(postData?.attributes?.article);

  return addApolloState(apolloClient, {
    props: {
      slug: params.slug,
      content,
    },
    revalidate: 1,
  });
}

export default Post;
