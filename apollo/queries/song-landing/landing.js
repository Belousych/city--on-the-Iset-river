import { gql } from "@apollo/client";

const LANDING_QUERY = gql`
  query Landing {
    isetLanding {
      data {
        id
        attributes {
          title
          subtitle
          aboutTitle
          aboutText
          aboutPS
          background {
            data {
              id
              attributes {
                url
              }
            }
          }
          avatar {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
    songs(sort: "id:asc", pagination: { start: 0, limit: 265 }) {
      data {
        id
        attributes {
          Header
          Text
          Lang
          videoUrl
          audioFile {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }

    teams(sort: "sortOrder:asc", pagination: { start: 0, limit: 100 }) {
      data {
        id
        attributes {
          Name
          role
          link
          sortOrder
          avatar {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default LANDING_QUERY;
