import { ProgectPageFragment } from "../pagePanels";

const WORK_SLIDER_FRAGMENT = `
		slider {
			featuredProject {
				... on Project {
					databaseId
					slug
					uri
					title
					projectBrandColour {
						projectBrandColour
					}
					pagePanels {
						pagePanels{
							... on Project_Pagepanels_PagePanels_WorkHeader {
								projectSubtitle
								clientLogo {
									altText
									sourceUrl
								}
								headerImage {
									altText
									sourceUrl
								}
							}
						}
					}
				}
			}
		}
`;

export default WORK_SLIDER_FRAGMENT;
