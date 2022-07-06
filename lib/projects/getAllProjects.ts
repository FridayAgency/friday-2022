import { QUERY_ALL_PROJECTS } from "../../queries/projects/queryAllProjects";
import { getApolloClient } from "../apollo-client";
import type { Project } from "../../types/graphql";

/**
 * getAllProjects
 * @author Brian Whelan
 *
 * @returns An array of all the projects includeing the prject header panel
 */

export type ProjectNode = {
	node: Project;
};

export type AllProjectsQueryResponse = {
	projects: {
		edges: Array<ProjectNode>;
	};
};

export type GetAllProjects = {
	projects: Array<Project>;
};

export const getAllProjects = async (): Promise<GetAllProjects> => {
	const appolloClient = getApolloClient();

	const data = await appolloClient.query<AllProjectsQueryResponse>({
		query: QUERY_ALL_PROJECTS,
	});

	const projects = data?.data?.projects.edges.map((project) => {
		const { node } = project;
		return { ...node };
	});

	return {
		projects,
	};
};
