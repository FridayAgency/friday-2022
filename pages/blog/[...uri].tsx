import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import NextAndPreviousPosts from "../../components/NextAndPreviousPosts";
import PageHead from "../../components/PageHead";
import PostContent from "../../components/PostContent";
import PostHeader from "../../components/PostHeader";
import { getPostTypeStaticPaths, PathsPromise } from "../../lib/postTypes/getPostTypeStaticPaths";
import {
	getPostTypeStaticProps,
	PostTypeStaticProps,
} from "../../lib/postTypes/getPostTypeStaticProps";

const postType: "page" | "post" | "project" = "post";

const Post = ({ content: post }) => {
	const { title, featuredImage, author, date, categories, content, uri } = post || {};

	return (
		<Layout>
			<PageHead
				seoData={post?.seo}
				title={post?.standardPageHeader?.pageCustomTitle ?? post?.title}
			/>
			<PostHeader title={title} imageUrl={featuredImage?.node?.sourceUrl} />
			<PostContent
				author={author}
				date={date}
				title={title}
				categories={categories}
				content={content}
				uri={uri}
			/>
			<NextAndPreviousPosts nextPost={post?.next || null} prevPost={post?.previous || null} />
		</Layout>
	);
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }): Promise<PostTypeStaticProps> => {
	const uri = `${params.uri[params.uri.length - 1]}`;

	return getPostTypeStaticProps(uri, postType);
};

// export const getStaticPaths: GetStaticPaths = async (): Promise<PathsPromise> => {
// 	return getPostTypeStaticPaths(postType);
// };

export const getStaticPaths: GetStaticPaths = () => {
	return {
	  paths: [],
	  fallback: 'blocking',
	};
  }