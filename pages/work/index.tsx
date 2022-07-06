import { GetStaticProps } from "next";
import { useState } from "react";
import Layout from "../../components/Layout";
import PageHead from "../../components/PageHead";

import TextHeader from "../../components/TextHeader";
import { FooterDetails } from "../../lib/footer/getFooterDetails";

import {
	getPostTypeStaticProps,
	PostTypeStaticProps,
} from "../../lib/postTypes/getPostTypeStaticProps";

import { Menu, Page, Project, Post } from "../../types/graphql";
import dynamic from "next/dynamic";

const postType = "page";
const Projects = dynamic(() => import("../../components/Projects"));
interface WorkProps {
	projects: Array<Project>;
	content: Page;
}

const Work = ({ projects, content: page }: WorkProps): JSX.Element => {
	const [bgColour, setBgColour] = useState("#FFFFF");

	return (
		<Layout>
			<PageHead
				seoData={page?.seo}
				title={page?.standardPageHeader?.pageCustomTitle ?? page?.title}
			/>
			<div style={{ background: bgColour, transition: "all .5s ease-in-out" }}>
				<TextHeader
					title={page?.standardPageHeader?.pageCustomTitle}
					colour="base"
					extraPadding={true}
					wavyLine={false}
				/>
				<Projects projects={projects} setBgColour={setBgColour} />
			</div>
		</Layout>
	);
};

export default Work;

export type WorkStaticProps = {
	menus: Array<Menu>;
	projects: Array<Project>;
	content: Page | Post | Project;
	footerData: FooterDetails;
};

export const getStaticProps: GetStaticProps = async (): Promise<PostTypeStaticProps> => {
	const uri = `/work/`;

	return getPostTypeStaticProps(uri, postType);
};
