import { gql } from '@apollo/client';

export const GET_ALL_PROJECT_URIS = gql`
  query Get_ALL_PROJECTS_URIS {
    projects(first: 100) {
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
