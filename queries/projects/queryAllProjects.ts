import { gql } from "@apollo/client";
import { PROJECT_HEAD_FRAGMENT } from "./projectHeaderFragment";

export const QUERY_ALL_PROJECTS = gql`
	${PROJECT_HEAD_FRAGMENT}
	query Get_ALL_PROJECTS {
		projects(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC }, status: PUBLISH }) {
			edges {
				node {
					databaseId
					slug
					uri
					title
					pagePanels {
						...Project_PagepanelsFragment
					}
					projectBrandColour {
						projectBrandColour
					}
				}
			}
		}
	}
`;
