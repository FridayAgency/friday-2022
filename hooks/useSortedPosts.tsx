import { createContext, Dispatch, useContext, useReducer } from "react";
import Posts from "../components/Posts";

import type { Category, Post } from "../types/graphql";

export enum ACTION_TYPES {
	changePage = "changePage",
	filterByCategory = "filterByCategory",
	showAllPosts = "showAllPosts",
	filterByAuthor = "filterByAuthor",
	search = "search",
}

export interface SortedPostsState {
	categories: Array<Category> | [];
	offset?: number;
	posts?: Array<Post> | [];
	postsToPaginate?: Array<Post> | [];
	paginatedPosts?: Array<Post> | [];
	postsPerPage?: number;
	pageCount?: number;
	currentCategory: string;
	pageTitle?: string;
	showCategories?: Boolean;
}

export interface SortedPostsPayload {
	categories?: Array<Category> | [];
	offset?: number;
	posts?: Array<Post> | [];
	postsToPaginate?: Array<Post> | [];
	paginatedPosts?: Array<Post> | [];
	postsPerPage?: number;
	pageCount?: number;
	slug?: string;
	currentCategory?: string;
	authorName?: string;
	pageTitle?: string;
	showCategories?: Boolean;
}

interface SortedPostsAction {
	type: ACTION_TYPES;
	payload: SortedPostsPayload;
}

export const sortedPostsReducer = (state: SortedPostsState, action: SortedPostsAction) => {
	switch (action.type) {
		case ACTION_TYPES.search: {
			const searchPosts = state.posts
				.filter((post: Post) => action.payload.posts.some((search: Post) => search.id === post.id))
				.sort((a, b) => {
					return (
						action.payload.posts.findIndex((p) => p.id === a.id) -
						action.payload.posts.findIndex((p) => p.id === b.id)
					);
				});
			return {
				...state,
				postsToPaginate: searchPosts,
				paginatedPosts: searchPosts.slice(0, state.postsPerPage),
				pageCount: Math.ceil(searchPosts.length / state.postsPerPage),
				pageTitle: action.payload.pageTitle,
				showCategories: false,
				offset: 0,
			};
		}

		case ACTION_TYPES.changePage: {
			return {
				...state,
				offset: action.payload.offset,
				paginatedPosts: state.postsToPaginate.slice(
					action.payload.offset,
					action.payload.offset + state.postsPerPage
				),
			};
		}
		case ACTION_TYPES.filterByCategory: {
			const categoryPosts = state.posts.filter((post: Post) => {
				const categories = post.categories.nodes.map((n) => n.slug);
				return categories.includes(action.payload.slug);
			});
			return {
				...state,
				offset: 0,
				postsToPaginate: categoryPosts,
				paginatedPosts: categoryPosts.slice(0, state.postsPerPage),
				pageCount: Math.ceil(categoryPosts.length / state.postsPerPage),
				currentCategory: action.payload.currentCategory,
				pageTitle: "Blog",
				showCategories: true,
			};
		}
		case ACTION_TYPES.showAllPosts: {
			return {
				...state,
				offset: action.payload.offset,
				postsToPaginate: state.posts,
				paginatedPosts: state.posts.slice(0, state.postsPerPage),
				pageCount: Math.ceil(state.posts.length / state.postsPerPage),
				currentCategory: action.payload.currentCategory,
				pageTitle: "Blog",
				showCategories: true,
			};
		}

		case ACTION_TYPES.filterByAuthor: {
			const authorsPosts = state.posts.filter(
				(post: Post) => post?.author?.node?.name === action.payload.authorName
			);
			return {
				...state,
				offset: 0,
				postsToPaginate: authorsPosts,
				paginatedPosts: authorsPosts.slice(0, state.postsPerPage),
				pageCount: Math.ceil(authorsPosts.length / state.postsPerPage),
				currentCategory: action.payload.currentCategory,
				pageTitle: "Blog",
				showCategories: true,
			};
		}

		default:
			throw new Error(`Field value update operation not supported: ${action.type}.`);
	}
};

const DEFAULT_STATE: SortedPostsState = {
	categories: [],
	offset: 0,
	posts: [],
	postsToPaginate: [],
	paginatedPosts: [],
	postsPerPage: 6,
	pageCount: 0,
	currentCategory: "",
};

const sortedPostsContext = createContext<{
	state: SortedPostsState;
	dispatch: Dispatch<SortedPostsAction>;
}>({
	state: DEFAULT_STATE,
	dispatch: () => {},
});

interface SortedPostsProviderProps {
	children: React.ReactNode;
	value: {
		state: SortedPostsState;
		dispatch: Dispatch<SortedPostsAction>;
	};
}

export const SortedPostsProvider = ({ children, value }: SortedPostsProviderProps): JSX.Element => {
	return <sortedPostsContext.Provider value={value}>{children}</sortedPostsContext.Provider>;
};

const useSortedPosts = () => useContext(sortedPostsContext);

export default useSortedPosts;
