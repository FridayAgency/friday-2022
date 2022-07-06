import { gql } from "@apollo/client";

export const GET_RESULTS = gql`
	query ($searchTerm: String) {
		posts(where: { search: $searchTerm }, first: 1000) {
			edges {
				node {
					id
				}
			}
		}
	}
`;
