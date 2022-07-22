import { gql } from '@apollo/client';

export const GET_ALL_PAGES_URI = gql`
  query GET_ALL_PAGES_URI {
    pages(first: 1000) {
      edges {
        node {
          id
          slug
          uri
          modified
        }
      }
    }
  }
`;
