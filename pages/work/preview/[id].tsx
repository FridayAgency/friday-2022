import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import {
	getPostTypeServerSideProps,
	PostTypeServerSideProps,
} from "../../../lib/postTypes/getPostTypeServerSideProps";

import { Project as ProjectType } from "../../../types/graphql";
import Project from "../[...uri]";

interface ProjectPreviewProps {
	content: ProjectType;
}

const postType = "project";

const ProjectPreview: React.FC<ProjectPreviewProps> = (props) => {
	return <Project {...props} />;
};

export default ProjectPreview;

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
): Promise<PostTypeServerSideProps> => {
	return getPostTypeServerSideProps(context, postType);
};
