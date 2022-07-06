import { getAllMenus } from "../menus/getAllMenus";
import type { Page, Menu, Post, Project, GfForm } from "../../types/graphql";
import { getPostTypeByUri } from "./getPostTypeByUri";
import { FooterDetails, getFooterDetails } from "../footer/getFooterDetails";
import getGravityFormById from "../gravityForms.ts/getGravityFormById";
import { getAllPostsByCategory } from "../posts/getPostsByCategory";
import { getAllPosts } from "../posts/getAllPosts";
import { getAllProjects } from "../projects/getAllProjects";

/**
 * Get the page static props
 *
 * @param {string} uri The uri of the page
 * @returns The menus, the latest post and the page data
 */

export type PostTypeStaticProps = {
	props: {
		menus: Array<Menu>;
		content: Page | Post | Project;
		gfForm?: GfForm;
		posts?: Array<Post>;
		footerData: FooterDetails;
		projects?: Array<Project>;
	};
};

export const getPostTypeStaticProps = async (
	uri: string,
	postType: "page" | "post" | "project"
): Promise<PostTypeStaticProps> => {
	const [{ menus }, content, footerData] = await Promise.all([
		getAllMenus(),
		getPostTypeByUri(uri, false, postType),
		getFooterDetails(),
	]);

	let gfForm: GfForm = null;
	let projects: Array<Project> = null;

	if (uri === "/contact/") {
		gfForm = await getGravityFormById(1);
	}

	let posts: Array<Post> = null;
	if (uri === "/careers/") {
		posts = await getAllPostsByCategory("careers");
	}

	if (uri === "/") {
		const data = await getAllPosts(2);
		posts = data.posts;
	}

	if (uri === "/work/") {
		const data = await getAllProjects();
		projects = data?.projects;
	}

	return {
		props: {
			menus,
			content,
			gfForm,
			posts,
			footerData,
			projects,
		},
	};
};
