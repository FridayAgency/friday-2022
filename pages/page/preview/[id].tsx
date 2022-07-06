import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import {
	getPostTypeServerSideProps,
	PostTypeServerSideProps,
} from "../../../lib/postTypes/getPostTypeServerSideProps";

import type { Category, GfForm, Page, Post, Project } from "../../../types/graphql";

import Home from "../..";
import PageComponent from "../../[...uri]";
import Blog from "../../blog";
import Work from "../../work";

const postType = "page";

interface PreviewPageProps {
	content: Page;
	posts?: Array<Post>;
	gform?: GfForm;
	postsPerPage?: number;
	categories?: Array<Category>;
	projects?: Array<Project>;
}

const PreviewPage: React.FC<PreviewPageProps> = (props) => {
	const title: string = props.content.title;

	switch (title) {
		case "Home":
			return <Home {...props} slug="home" />;
		case "Blog":
			return (
				<Blog
					content={props.content}
					posts={props.posts ?? []}
					postsPerPage={props.postsPerPage ?? 0}
					categories={props.categories ?? []}
				/>
			);
		case "Work":
			return <Work projects={props.projects ?? []} content={props.content} />;
		default:
			return <PageComponent {...props} />;
	}
};

export default PreviewPage;

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
): Promise<PostTypeServerSideProps> => {
	return getPostTypeServerSideProps(context, postType);
};
