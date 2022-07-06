import { getAuthTokenCookie } from "../../utils/cookies";
import { GET_PAGE_BY_URI } from "../../queries/pages/queryPageByUri";
import { getApolloClient } from "../../lib/apollo-client";
import { getAllMenus } from "../menus/getAllMenus";

import type { GetServerSidePropsContext } from "next";
import { getAllPosts } from "../posts/getAllPosts";
import { Page, Post, Menu, Project, GfForm, Category } from "../../types/graphql";
import { GET_POST_BY_URI } from "../../queries/posts/queryPostByUri";
import { FooterDetails, getFooterDetails } from "../footer/getFooterDetails";
import { GET_PROJECT_BY_URI } from "../../queries/projects/queryProjectByUri";
import getGravityFormById from "../gravityForms.ts/getGravityFormById";
import { getAllPostsByCategory } from "../posts/getPostsByCategory";
import { getAllProjects } from "../projects/getAllProjects";

export type PageQueryResponse = {
	page?: Page;
	post?: Post;
};

export type ContentData = {
	data: PageQueryResponse;
};

export type PostTypeServerSideProps = {
	props: {
		menus: Array<Menu>;
		content: Page | Post | Project;
		footerData: FooterDetails;
		gfForm?: GfForm;
		posts?: Array<Post>;
		categories?: Array<Category>;
		postsPerPage?: number;
		projects?: Array<Project>;
	};
};

export const getPostTypeServerSideProps = async (
	context: GetServerSidePropsContext,
	postType: "page" | "post" | "project"
): Promise<PostTypeServerSideProps> => {
	const [{ menus }, footerData] = await Promise.all([getAllMenus(), getFooterDetails()]);

	const authToken = getAuthTokenCookie(context.req);
	const { params } = context || {};
	const apolloClient = getApolloClient();

	let contentData: ContentData;

	const queries = {
		page: GET_PAGE_BY_URI,
		post: GET_POST_BY_URI,
		project: GET_PROJECT_BY_URI,
	};

	try {
		contentData = await apolloClient.query<PageQueryResponse>({
			query: queries[postType],
			fetchPolicy: "network-only",
			variables: {
				uri: Number(params?.id ?? ""),
				idType: "DATABASE_ID",
				preview: true,
			},
			context: {
				headers: {
					authorization: authToken ? `Bearer ${authToken}` : "",
				},
			},
		});
	} catch (e) {
		console.log(e.message);
		throw e;
	}

	let content: Page | Post | Project = contentData?.data?.[postType];

	if (content?.revisions.nodes.length) {
		content = content.revisions.nodes[0];
	}

	let gfForm: GfForm = null;
	let postsPerPage: number = null;
	let categories: Array<Category> = null;
	let projects: Array<Project> = null;

	const slug: string | string[] = context.query.slug as string;

	// const pageUri = `/${uri.join("/")}/`;

	if (slug === "contact") {
		gfForm = await getGravityFormById(1);
	}

	let posts: Array<Post> = null;
	if (slug === "careers") {
		posts = await getAllPostsByCategory("careers");
	}

	if (slug === "home") {
		const data = await getAllPosts(2);
		posts = data?.posts;
	}

	if (slug === "blog") {
		const data = await getAllPosts(1000);
		posts = data?.posts;
		postsPerPage = data?.postsPerPage;
		categories = data?.categories;
	}

	if (slug === "work") {
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
			postsPerPage,
			categories,
			projects,
		},
	};
};
