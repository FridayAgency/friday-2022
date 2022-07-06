import { GET_RESULTS } from "../../queries/posts/queryPostSearch";
import { Post } from "../../types/graphql";
import { getApolloClient } from "../apollo-client";
import { PostNode } from "./getAllPosts";

export type SearchQueryResponse = {
	posts: {
		edges: Array<PostNode>;
	};
};

export const getPostsSearchQuery = async (query: string): Promise<Array<Post>> => {
	const apolloClient = getApolloClient();
	const { data } = await apolloClient.query<SearchQueryResponse>({
		query: GET_RESULTS,
		variables: {
			searchTerm: query,
		},
	});

	const posts = data.posts.edges.map((post) => {
		const { node } = post;
		return { ...node };
	});

	return posts;
};
