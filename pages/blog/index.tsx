import { GetStaticProps, GetStaticPropsResult } from "next";
import React, { useReducer, useRef, useState } from "react";
import { getAllPosts } from "../../lib/posts/getAllPosts";
import { getAllMenus } from "../../lib/menus/getAllMenus";
import Layout from "../../components/Layout";
import { Category, Menu, Page, Post, Project } from "../../types/graphql";
import { ACTION_TYPES, SortedPostsProvider, sortedPostsReducer } from "../../hooks/useSortedPosts";
import Posts from "../../components/Posts";
import Categories from "../../components/Categories";
import { FooterDetails, getFooterDetails } from "../../lib/footer/getFooterDetails";
import PageHeader from "../../components/PageHeader";
import { getPostTypeByUri } from "../../lib/postTypes/getPostTypeByUri";
import PageHead from "../../components/PageHead";

import { PostNode } from "../../lib/postTypes/getAllPostTypeUris";
import { getPostsSearchQuery } from "../../lib/posts/getPostsSearchQuery";
import Search from "../../components/Search";
import Section from "../../components/Section";

interface BlogProps {
	posts: Array<Post>;
	postsPerPage: number;
	categories: Array<Category>;
	content: Page;
}

export type SearchQueryResponse = {
	posts: {
		edges: Array<PostNode>;
	};
};

const postType = "page";

const Blog = ({ posts, postsPerPage, categories, content: page }: BlogProps) => {
	// remove the Uncategorised category

	const filteredCategories = categories.filter((category) => category.name !== "Uncategorised");

	const DEFAULT_STATE = {
		categories: filteredCategories,
		offset: 0,
		posts,
		postsToPaginate: posts,
		paginatedPosts: posts.slice(0, postsPerPage),
		postsPerPage,
		pageCount: Math.ceil(posts.length / postsPerPage),
		currentCategory: "All Posts",
		pageTitle: "Blog",
		showCategories: true,
	};

	const [state, dispatch] = useReducer(sortedPostsReducer, DEFAULT_STATE);

	const searchInput = useRef<HTMLInputElement>(null!);
	const [noSearchResults, setNoSerachResults] = useState<string>(null);

	const handleClick = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!searchInput.current.value.length) return;

		try {
			if (noSearchResults) setNoSerachResults(null);

			const posts = await getPostsSearchQuery(searchInput.current.value);

			if (!posts.length) {
				setNoSerachResults(searchInput.current.value);
			}

			dispatch({
				type: ACTION_TYPES.search,
				payload: {
					posts,
					pageTitle: `Search results for "${searchInput.current.value}"`,
					showCategories: false,
				},
			});

			searchInput.current.value = "";
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SortedPostsProvider value={{ state, dispatch }}>
			<Layout>
				<PageHead
					seoData={page?.seo}
					title={page?.standardPageHeader?.pageCustomTitle ?? page?.title}
				/>
				<PageHeader slug={"blog"} title={state.pageTitle} />
				<Section>
					{noSearchResults && (
						<p>
							Sorry, no results found for <strong>“{noSearchResults}”</strong>. Please try again
							with different keywords.
						</p>
					)}
					<div
						style={{
							position: "relative",
							width: state?.showCategories ? "100%" : "300px",
							minHeight: "50px",
							marginBottom: "20px",
							marginTop: "40px",
						}}
					>
						{state?.showCategories && <Categories />}
						<Search ref={searchInput} onClick={handleClick} />
					</div>
				</Section>
				{!noSearchResults && <Posts pagination priority />}
			</Layout>
		</SortedPostsProvider>
	);
};

export default Blog;

export type BlogStaticProps = {
	menus: Array<Menu>;
	posts: Array<Post>;
	postsPerPage: number;
	categories: Array<Category>;
	footerData: FooterDetails;
	content: Page | Post | Project;
};

export const getStaticProps: GetStaticProps = async (): Promise<
	GetStaticPropsResult<BlogStaticProps>
> => {
	const [{ menus }, { posts, postsPerPage, categories }, footerData, content] = await Promise.all([
		getAllMenus(),
		getAllPosts(1000),
		getFooterDetails(),
		getPostTypeByUri("/blog/", false, postType),
	]);

	return {
		props: {
			menus,
			posts,
			postsPerPage,
			categories,
			footerData,
			content,
		},
	};
};
