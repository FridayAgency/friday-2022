import { gql } from "@apollo/client";

// Post Fields Fragment
export const POST_FIELDS = gql`
	fragment PostFields on Post {
		id
		categories {
			nodes {
				databaseId
				id
				name
				slug
			}
		}
		databaseId
		date
		isSticky
		postId
		slug
		title
		uri
	}
`;
