import { gql } from "@apollo/client";
import { POST_FIELDS } from "./postFieldsFragment";

export const QUERY_ALL_POSTS = gql`
	${POST_FIELDS}
	query AllPosts($amount: Int) {
		posts(first: $amount) {
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
		readingSettings {
			postsPerPage
		}
		categories(first: 100) {
			edges {
				node {
					id
					name
					slug
				}
			}
		}
	}
`;
