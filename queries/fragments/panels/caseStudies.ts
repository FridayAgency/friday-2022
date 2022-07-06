const CASE_STUDIES_FRAGMENT = `
		title
		copyLine
		projectsBlogPosts {
			featuredProjectpost {
				... on Post {
					id
					slug
					title
					uri
					featuredImage {
						node {
							altText
							caption
							sourceUrl
						}
					}
				}
				... on Project {
					id
					slug
					uri
					title
					pagePanels{
						pagePanels{
							... on Project_Pagepanels_PagePanels_WorkHeader {
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
		paddingTopBottom
	
`;

export default CASE_STUDIES_FRAGMENT;
