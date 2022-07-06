import { getApolloClient } from "../apollo-client";
import { GET_ALL_PAGES_URI } from "../../queries/pages/queryAllPageUris";
import type { Page, Post } from "../../types/graphql";
import { GET_ALL_POSTS_URI } from "../../queries/posts/queryAllPostsUris";
import { GET_ALL_PROJECT_URIS } from "../../queries/projects/queryAllProjectUris";

/**
 * getAllPagesUri
 *
 * @author Brian Whelan
 *
 * @returns Uris for all pages
 */

export type PageNode = {
	node: Page;
};

export type PostNode = {
	node: Post;
};

export type AllPagesUriQueryResponse = {
	pages?: {
		edges: Array<PageNode>;
	};
	posts?: {
		edges: Array<PostNode>;
	};
};

export type PostTypeUris = {
	postTypeUris: Array<Page> | Array<Post>;
};

export const getAllPostTypesUris = async (
	postType: "page" | "post" | "project"
): Promise<PostTypeUris> => {
	const apolloClient = getApolloClient();

	const queries = {
		page: GET_ALL_PAGES_URI,
		post: GET_ALL_POSTS_URI,
		project: GET_ALL_PROJECT_URIS,
	};

	const data = await apolloClient.query<AllPagesUriQueryResponse>({
		query: queries[postType],
	});

	const urisData = data?.data?.[`${postType}s`];

	const postTypeUris = urisData?.edges
		.map((edge: { node: any }) => {
			const { node } = edge;
			return { ...node };
		})
		.filter((post) => post.slug !== "blog" && post.slug !== "home" && post.slug !== "work");

	return {
		postTypeUris,
	};
};
