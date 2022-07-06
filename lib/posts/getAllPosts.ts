import { QUERY_ALL_POSTS } from "../../queries/posts/queryAllPosts";
import { getApolloClient } from "../apollo-client";
import type { Post, Category } from "../../types/graphql";

/**
 * getAllPosts
 * @author Brian Whelan
 *
 * @returns An array of all the blog posts, An Araay or post Categories
 *  and The number of posts per page from wordpress
 */

export type PostNode = {
	node: Post;
};

export type CategoryNode = {
	node: Category;
};

export type AllPostsQueryResponse = {
	posts: {
		edges: Array<PostNode>;
	};
	readingSettings: {
		postsPerPage: number;
	};
	categories: {
		edges: Array<CategoryNode>;
	};
};

export type GetAllPosts = {
	posts: Array<Post>;
	postsPerPage: number;
	categories: Array<Category>;
};

export const getAllPosts = async (amount: number): Promise<GetAllPosts> => {
	const apolloClient = getApolloClient();

	const data = await apolloClient.query<AllPostsQueryResponse>({
		query: QUERY_ALL_POSTS,
		variables: {
			amount,
		},
	});

	const posts = data?.data?.posts.edges.map((post) => {
		const { node } = post;
		return { ...node };
	});

	const postsPerPage = data?.data?.readingSettings?.postsPerPage;

	// remove the node from each category
	const categorieData = data?.data?.categories?.edges.map((category) => {
		const { node } = category;
		return { ...node };
	});

	// Return all but the uncategorized category
	const categories = categorieData.filter((category) => category?.name != "Uncategorized");

	return {
		posts,
		postsPerPage,
		categories,
	};
};
