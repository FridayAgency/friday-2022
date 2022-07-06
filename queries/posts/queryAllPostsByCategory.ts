import { gql } from "@apollo/client";
import { POST_FIELDS } from "./postFieldsFragment";

export const QUERY_ALL_POSTS_BY_CATEGORY = gql`
	${POST_FIELDS}
	query ALL_POSTS_BY_CATEGORY($category: String) {
		posts(where: { categoryName: $category }) {
			edges {
				node {
					...PostFields
					author {
						node {
							avatar {
								height
								url
								width
							}
							id
							name
							slug
						}
					}
					content
					date
					excerpt
					featuredImage {
						node {
							altText
							caption
							sourceUrl
							srcSet
							sizes
							id
						}
					}
					modified
				}
			}
		}
	}
`;
