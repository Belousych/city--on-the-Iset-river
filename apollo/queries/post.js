import { gql } from "@apollo/client";

const GETPOSTBYID = gql`
  query Post($id: ID!) {
    post(id: $id) {
      data {
        id

        attributes {
          title
          Date
          createdAt
          updatedAt
          publishedAt
          images {
            data {
              attributes {
                url
              }
            }
          }
          article
        }
      }
    }
  }
`;

const GETPOSTBYSLUG = gql`
  query Post($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          slug
          Date
          createdAt
          updatedAt
          publishedAt
          images {
            data {
              attributes {
                url
              }
            }
          }
          article
        }
      }
    }
  }
`;

export { GETPOSTBYID, GETPOSTBYSLUG };
