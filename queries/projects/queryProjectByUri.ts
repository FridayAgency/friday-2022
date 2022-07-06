import { gql } from "@apollo/client";
import { ProgectPageFragment } from "../fragments/pagePanels";
import { SeoFragment } from "../fragments/seo";

export const PROJECT_FIELDS_FRAGMENT = gql`
	fragment ProjectFields on Project {
		databaseId
		slug
		uri
		title
		pagePanels {
			...ProjectpanelsFragment
		}
		next {
			slug
			uri
			title
			pagePanels {
				...ProjectpanelsFragment
			}
		}
		previous {
			slug
			uri
			title
			pagePanels {
				...ProjectpanelsFragment
			}
		}
		projectBrandColour {
			projectBrandColour
		}
		seo {
			...PostTypeSEOFragment
		}
	}
`;
export const GET_PROJECT_BY_URI = gql`
	query GET_PROJECT_BY_URI($uri: ID!, $idType: ProjectIdType!, $asPreview: Boolean = false) {
		project(id: $uri, idType: $idType, asPreview: $asPreview) {
			...ProjectFields
			revisions(where: { orderby: { field: MODIFIED, order: DESC } }, first: 1) {
				nodes {
					...ProjectFields
				}
			}
		}
	}
	${PROJECT_FIELDS_FRAGMENT}
	${SeoFragment}
	${ProgectPageFragment}
`;

export const GET_LAST_PROJECT = gql`
	query GET_LAST_PROJECT {
		projects(first: 1, where: { orderby: { field: MENU_ORDER, order: DESC }, status: PUBLISH }) {
			edges {
				node {
					databaseId
					slug
					uri
					title
					pagePanels {
						...ProjectpanelsFragment
					}
				}
			}
		}
	}
	${ProgectPageFragment}
`;

export const GET_FIRST_PROJECT = gql`
	query GET_FIRST_PROJECT {
		projects(first: 1, where: { orderby: { field: MENU_ORDER, order: ASC }, status: PUBLISH }) {
			edges {
				node {
					databaseId
					slug
					uri
					title
					pagePanels {
						...ProjectpanelsFragment
					}
				}
			}
		}
	}
	${ProgectPageFragment}
`;
