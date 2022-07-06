import { gql } from "@apollo/client";
import { SeoFragment } from "../fragments/seo";

export const POST_FIELDS_FRAGMENT = gql`
	fragment PostFieldsFragment on Post {
		id
		slug
		uri
		title
		categories {
			nodes {
				slug
				name
			}
		}
		date
		content
		excerpt
		featuredImage {
			node {
				altText
				caption
				sourceUrl
			}
		}
		author {
			node {
				avatar {
					url
				}
				firstName
				lastName
				name
				description
			}
		}
		next {
			id
			featuredImage {
				node {
					altText
					sourceUrl
				}
			}
			slug
			uri
			title
		}
		previous {
			id
			featuredImage {
				node {
					altText
					sourceUrl
				}
			}
			slug
			uri
			title
		}
		seo {
			...PostTypeSEOFragment
		}
	}
`;

export const GET_POST_BY_URI = gql`
	query GET_POST_BY_URI($uri: ID!, $idType: PostIdType!, $asPreview: Boolean = false) {
		post(id: $uri, idType: $idType, asPreview: $asPreview) {
			...PostFieldsFragment
			revisions(where: { orderby: { field: MODIFIED, order: DESC } }, first: 1) {
				nodes {
					...PostFieldsFragment
				}
			}
		}
	}
	${POST_FIELDS_FRAGMENT}
	${SeoFragment}
`;
