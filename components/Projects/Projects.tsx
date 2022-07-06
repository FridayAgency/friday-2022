import { useEffect, useRef } from "react";
import { Project } from "../../types/graphql";
import Section from "../Section";
import styles from "./Projects.module.scss";
import ProjectSnippet from "../ProjectSnippet";

interface ProjectCardProps {
	project: Project;
	setBgColour: React.Dispatch<React.SetStateAction<string>>;
	priority?: boolean;
}

export const ProjectCard = ({ project, setBgColour, priority }: ProjectCardProps): JSX.Element => {
	const projectRef = useRef(null!);

	const [details]: any = project?.pagePanels?.pagePanels.filter(
		(project) => project?.__typename === "Project_Pagepanels_PagePanels_WorkHeader"
	);

	useEffect(() => {
		const scrollListener = () => {
			const projectContainer = projectRef.current;
			const scroll = window.scrollY + window.innerHeight / 2;
			if (projectContainer) {
				if (
					projectContainer.offsetTop <= scroll &&
					projectContainer.offsetTop + projectContainer.offsetHeight > scroll
				) {
					setBgColour(project?.projectBrandColour?.projectBrandColour);
				}

				if (window.scrollY === 0) {
					setBgColour("#FFFFFF");
				}
			}
		};

		window.addEventListener("scroll", scrollListener, { passive: true });

		return () => window.removeEventListener("scroll", scrollListener);
	}, []);

	return (
		<div className={styles.project}>
			<div ref={projectRef} className={styles.snippet}>
				<ProjectSnippet
					url={project?.uri}
					headerImage={details?.headerImage}
					clientLogo={details?.clientLogo}
					title={details?.projectSubtitle}
					priority={priority}
				/>
			</div>
		</div>
	);
};

interface ProjectsProps {
	setBgColour: React.Dispatch<React.SetStateAction<string>>;
	projects: Array<Project>;
}

const Projects = ({ setBgColour, projects }: ProjectsProps): JSX.Element => {
	return (
		<Section>
			{projects.map((project: Project, index: number) => (
				<ProjectCard
					key={project?.databaseId}
					project={project}
					setBgColour={setBgColour}
					priority={index === 0 ? true : false}
				/>
			))}
		</Section>
	);
};

export default Projects;
