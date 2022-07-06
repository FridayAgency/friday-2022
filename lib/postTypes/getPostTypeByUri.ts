import { GET_PAGE_BY_URI } from "../../queries/pages/queryPageByUri";
import { getApolloClient } from "../apollo-client";
import type { Page, Post, Project } from "../../types/graphql";
import { GET_POST_BY_URI } from "../../queries/posts/queryPostByUri";
import { GET_PROJECT_BY_URI } from "../../queries/projects/queryProjectByUri";

/**
 * Function getPageByUri
 * @author Brian Whelan
 *
 * @param {string} uri The uri for the page
 * @returns The page data
 */

export type QueryResponse = {
	post?: Post;
	page?: Page;
	project?: Project;
};

export type ContentData = {
	data: QueryResponse;
};

export const getPostTypeByUri = async (
	uri: string,
	asPreview: boolean = false,
	postType: "page" | "post" | "project"
): Promise<Page | Post | Project> => {
	const apolloClient = getApolloClient();

	const queries = {
		page: GET_PAGE_BY_URI,
		post: GET_POST_BY_URI,
		project: GET_PROJECT_BY_URI,
	};

	let contentData: ContentData;

	try {
		contentData = await apolloClient.query<QueryResponse>({
			query: queries[postType],
			variables: {
				uri,
				idType: postType === "page" ? "URI" : "SLUG",
				asPreview,
			},
		});
	} catch (e) {
		console.log(`[pages][getPageByUri] Failed to query page data: ${e.message}`);
		throw e;
	}

	const content: Page | Post | Project = contentData?.data?.[postType];

	return content;
};
