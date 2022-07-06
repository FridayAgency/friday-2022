import { gql } from "@apollo/client";

export const GET_ALL_POSTS_URI = gql`
	query GET_ALL_POSTS_URI {
		posts(first: 1000) {
			edges {
				node {
					id
					slug
					uri
				}
			}
		}
	}
`;
