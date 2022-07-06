import { getApolloClient } from "../apollo-client";
import type { Post, Category } from "../../types/graphql";
import { PostNode } from "./getAllPosts";
import { QUERY_ALL_POSTS_BY_CATEGORY } from "../../queries/posts/queryAllPostsByCategory";

/**
 * getAllPostsByCategory
 * @author Brian Whelan
 *
 * @param {string} category The category you wish to get the posts by
 *
 * @returns An array of all the blog posts, An Araay or post Categories
 *  and The number of posts per page from wordpress
 */

export type GetAllPostsByCategoryQueryResponse = {
	posts: {
		edges: Array<PostNode>;
	};
};

export const getAllPostsByCategory = async (category: string): Promise<Array<Post>> => {
	const apolloClient = getApolloClient();

	const data = await apolloClient.query<GetAllPostsByCategoryQueryResponse>({
		query: QUERY_ALL_POSTS_BY_CATEGORY,
		variables: {
			category,
		},
	});

	const posts = data?.data?.posts.edges.map((post) => {
		const { node } = post;
		return { ...node };
	});

	return posts;
};
