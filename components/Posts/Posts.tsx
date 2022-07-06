import { useRouter } from "next/router";
import { useEffect } from "react";
import useSortedPosts, { ACTION_TYPES } from "../../hooks/useSortedPosts";

import { Post } from "../../types/graphql";

import BlogCard from "../BlogCard";
import CtaButton from "../CtaButton";
import Pagination from "../Pagination";
import Section from "../Section";

import styles from "./Posts.module.scss";
interface PostsProps {
	posts?: Array<Post>;
	pagination?: Boolean;
	padding?: string;
	title?: string;
	morePostsButton?: Boolean;
	alignment?: "centre" | "left";
	priority?: Boolean;
}

const Posts: React.FC<PostsProps> = ({
	posts,
	pagination,
	padding,
	title,
	morePostsButton,
	alignment,
	priority = false,
}) => {
	const { state, dispatch } = useSortedPosts();
	let postsToList: Array<Post>;

	const router = useRouter();

	if (posts) {
		postsToList = posts;
	} else {
		postsToList = state?.paginatedPosts;
	}

	useEffect(() => {
		if (router?.query?.author) {
			dispatch({
				type: ACTION_TYPES.filterByAuthor,
				payload: {
					authorName: router.query.author as string,
				},
			});
		} else if (router?.query?.categorySlug) {
			dispatch({
				type: ACTION_TYPES.filterByCategory,
				payload: {
					slug: router?.query?.categorySlug as string,
					currentCategory: router?.query?.currentCategory as string,
				},
			});
		}
	}, []);

	return (
		<Section padding={padding} alignment={alignment}>
			{title && <h2 className={styles.title}> {title}</h2>}
			<div className={styles.posts}>
				{postsToList.map((post: Post, index: number) => (
					<BlogCard
						key={post?.id}
						post={post}
						priority={priority && index === 0 ? true : false}
						index={index}
					/>
				))}

				{pagination && <Pagination />}
			</div>
			{morePostsButton && <CtaButton url={"/blog/"} title="See More Posts" colour="red" />}
		</Section>
	);
};

export default Posts;
