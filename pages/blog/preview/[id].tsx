import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import {
	getPostTypeServerSideProps,
	PostTypeServerSideProps,
} from "../../../lib/postTypes/getPostTypeServerSideProps";
import { Post as PostType } from "../../../types/graphql";
import Post from "../[...uri]";

interface PreviewPostProps {
	content: PostType;
}

const postType = "post";

const PreviewPost: React.FC<PreviewPostProps> = (props) => {
	return <Post {...props} />;
};

export default PreviewPost;

export const getServerSideProps: GetServerSideProps = async (
	context: GetServerSidePropsContext
): Promise<PostTypeServerSideProps> => {
	return getPostTypeServerSideProps(context, postType);
};
