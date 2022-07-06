import { useEffect, useState } from "react";

import Section from "../../Section";
import ProjectLink from "../../ProjectLink";

import { getApolloClient } from "../../../lib/apollo-client";
import { GET_FIRST_PROJECT, GET_LAST_PROJECT } from "../../../queries/projects/queryProjectByUri";

import type {
	Project_Pagepanels_PagePanels_NextAndPrevious,
	Project,
	RootQueryToProjectConnection,
} from "../../../types/graphql";

import styles from "./NextAndPrevious.module.scss";
interface NextAndPreviousProps {
	panel: Project_Pagepanels_PagePanels_NextAndPrevious;
	project: Project;
}

export type ProjectQuery = {
	projects: RootQueryToProjectConnection;
};

const NextAndPrevious = ({ panel, project }: NextAndPreviousProps): JSX.Element => {
	const [previousProject, setPreviousProject] = useState(project?.previous);
	const [nextProject, setNextProject] = useState(project?.next);
	const [previousProjectDetails, setPreviousProjectDetails] = useState(null!);
	const [nextProjectDetails, setNextProjectDetails] = useState(null!);

	const filterProject = (project: Project) => {
		return project?.pagePanels?.pagePanels?.filter(
			(panel) => panel?.__typename === "Project_Pagepanels_PagePanels_WorkHeader"
		)[0];
	};

	useEffect(() => {
		if (!project?.next) {
			const getFirstProject = async () => {
				const apolloClient = getApolloClient();
				const { data } = await apolloClient.query<ProjectQuery>({
					query: GET_FIRST_PROJECT,
				});
				const _project = data?.projects?.edges[0]?.node;

				setNextProject(_project);
				setNextProjectDetails(filterProject(_project));
			};
			getFirstProject();
		} else {
			setNextProjectDetails(filterProject(project?.next));
		}

		if (!project?.previous) {
			const getLastProject = async () => {
				const apolloClient = getApolloClient();
				const { data } = await apolloClient.query<ProjectQuery>({
					query: GET_LAST_PROJECT,
				});

				const _project = data?.projects?.edges[0]?.node;

				setPreviousProject(_project);
				setPreviousProjectDetails(filterProject(_project));
			};
			getLastProject();
		} else {
			setPreviousProjectDetails(filterProject(project?.previous));
		}
	}, []);

	return panel?.nextAndPrevious === "show" ? (
		<Section padding={panel?.paddingTopBottom}>
			<div className={styles.container}>
				<div className={styles.previous}>
					{previousProject?.uri && (
						<ProjectLink
							project={previousProject}
							projectDetails={previousProjectDetails}
							subTitle="Previous"
						/>
					)}
				</div>
				<div className={styles.next}>
					{nextProject?.uri && (
						<ProjectLink
							project={nextProject}
							projectDetails={nextProjectDetails}
							subTitle="Next"
						/>
					)}
				</div>
			</div>
		</Section>
	) : null;
};

export default NextAndPrevious;
