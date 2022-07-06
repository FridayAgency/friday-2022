import Section from "../../Section";
import ProjectLink from "../../ProjectLink";

import type {
	Page_Pagepanels_PagePanels_CaseStudiesLayout,
	Project_Pagepanels_PagePanels_CaseStudiesLayout,
} from "../../../types/graphql";

import styles from "./CaseStudiesPanel.module.scss";
interface CaseStudiesPanelProps {
	panel:
		| Page_Pagepanels_PagePanels_CaseStudiesLayout
		| Project_Pagepanels_PagePanels_CaseStudiesLayout;
}

const CaseStudiesPanel: React.FC<CaseStudiesPanelProps> = ({ panel }) => {
	return (
		<Section padding={panel?.paddingTopBottom}>
			<div className={styles.container}>
				<h3>{panel?.title ?? ""}</h3>
				<p>{panel?.copyLine ?? ""}</p>
				<div className={styles.posts}>
					{panel?.projectsBlogPosts?.map((project) => {
						if (project?.featuredProjectpost?.__typename === "Post") {
							const post = project?.featuredProjectpost;
							return (
								<ProjectLink
									key={project?.featuredProjectpost?.title}
									project={project?.featuredProjectpost}
									projectDetails={project?.featuredProjectpost}
									type="post"
									subTitle="View Blog"
								/>
							);
						} else {
							const header = project?.featuredProjectpost?.pagePanels?.pagePanels.filter(
								(panel) => panel.__typename === "Project_Pagepanels_PagePanels_WorkHeader"
							)[0];

							return (
								<ProjectLink
									key={project?.featuredProjectpost?.title}
									project={project?.featuredProjectpost}
									projectDetails={header}
									subTitle="View Project"
								/>
							);
						}
					})}
				</div>
			</div>
		</Section>
	);
};

export default CaseStudiesPanel;
