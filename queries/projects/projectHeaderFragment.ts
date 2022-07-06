import { gql } from "@apollo/client";

export const PROJECT_HEAD_FRAGMENT = gql`
	fragment Project_PagepanelsFragment on Project_Pagepanels {
		pagePanels {
			... on Project_Pagepanels_PagePanels_WorkHeader {
				clientLogo {
					sourceUrl
					altText
				}
				projectSubtitle
				headerImage {
					sourceUrl
					altText
				}
			}
		}
	}
`;
