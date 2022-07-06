import { Category, Post } from "../../types/graphql";
import Image from "next/image";
import { format } from "date-fns";

import ImageLink from "../ImageLink";

import styles from "./BlogCard.module.scss";
import Link from "next/link";
import Editor from "../Editor";
import useSortedPosts, { ACTION_TYPES } from "../../hooks/useSortedPosts";
import { NextRouter, useRouter } from "next/router";

/**
 * BlogCard
 * @author Brian Whelan
 *
 * @param {Post} post The post object
 * @param {boolean} priority True if you wish for the Image to have priority.
 * @param {number} index The index of the loop
 *
 * @returns The Blog snippet
 */

interface BlogCardProps {
	post: Post;
	priority: boolean;
	index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, priority, index }) => {
	const { featuredImage, author, date, uri, title, excerpt, categories } = post;

	const { state, dispatch } = useSortedPosts();
	const dateFormated: string = format(new Date(date), "do MMMM yyyy");

	// const postLink: string = `/blog${uri}`;
	const postLink: string = uri;

	const router: NextRouter = useRouter();

	const handleAuthorClick = (author: string) => {
		dispatch({
			type: ACTION_TYPES.filterByAuthor,
			payload: {
				authorName: author,
				currentCategory: "All Posts",
			},
		});

		if (router.pathname !== "/blog") {
			router.push({ pathname: "/blog", query: { author } });
		} else {
			window.history.replaceState(null, "", "/blog");
		}
	};

	const handleCategoryClick = (category: Category) => {
		dispatch({
			type: ACTION_TYPES.filterByCategory,
			payload: {
				slug: category?.slug,
				currentCategory: category?.name,
			},
		});

		if (router.pathname !== "/blog") {
			router.push({
				pathname: "/blog",
				query: { categorySlug: category?.slug, currentCategory: category?.name },
			});
		} else {
			window.history.replaceState(null, "", "/blog");
		}
	};

	return (
		<div
			className={`${styles.wrapper} ${
				index === state.paginatedPosts.length - 1 ? styles.last : ""
			}`}
		>
			<div className={styles.image}>
				<ImageLink
					imageSrc={featuredImage?.node?.sourceUrl}
					imageAlt={featuredImage?.node?.altText}
					linkUrl={postLink}
					externalLink={false}
					objectFit="cover"
					priority={priority}
					screenReaderText={title}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.author}>
					<span className={styles.avatar}>
						<Image
							src={author?.node?.avatar?.url}
							alt={author?.node?.name}
							layout="fill"
							objectFit="cover"
						/>
					</span>
					<span className={styles.date}>{dateFormated}</span>
					<span className={styles.name} onClick={() => handleAuthorClick(author?.node?.name)}>
						{author?.node?.name}
					</span>
				</div>
				<h2 className={styles.title}>
					<Link href={postLink}>
						<a>{title}</a>
					</Link>
				</h2>
				<Editor className={styles.excerpt} copy={excerpt} />
				<ul className={styles.categories}>
					{categories?.nodes?.map((category, index) => (
						<li key={category?.id} onClick={() => handleCategoryClick(category)}>
							{category?.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BlogCard;
