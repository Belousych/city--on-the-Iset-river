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
    songs(sort: "id:asc") {
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

    teams(sort: "id:asc", pagination: { start: 0, limit: 100 }) {
      data {
        id
        attributes {
          Name
          role
          link
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
