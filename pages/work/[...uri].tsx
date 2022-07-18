import { GetStaticPaths, GetStaticProps } from "next";

import Layout from "../../components/Layout";
import PageHead from "../../components/PageHead";
import dynamic from "next/dynamic";
const PagePanels = dynamic(() => import("../../components/PagePanels"));
import { getPostTypeStaticPaths, PathsPromise } from "../../lib/postTypes/getPostTypeStaticPaths";
import {
	getPostTypeStaticProps,
	PostTypeStaticProps,
} from "../../lib/postTypes/getPostTypeStaticProps";

const postType = "project";

const Project = ({ content: project }) => {
	return (
		<Layout>
			<PageHead seoData={project?.seo} title={project?.title} />
			<PagePanels panels={project?.pagePanels} project={project} />
		</Layout>
	);
};

export default Project;

export const getStaticProps: GetStaticProps = async ({ params }): Promise<PostTypeStaticProps> => {
	const uri = `/${params.uri[params.uri.length - 1]}/`;

	return getPostTypeStaticProps(uri, postType);
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
	  paths: [],
	  fallback: 'blocking',
	};
  }