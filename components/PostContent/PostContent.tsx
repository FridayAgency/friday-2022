import { format } from "date-fns";
import Image from "next/image";

import Editor from "../Editor";
import Section from "../Section";

import styles from "./PostContent.module.scss";

import {
	Category,
	NodeWithAuthorToUserConnectionEdge,
	PostToCategoryConnection,
} from "../../types/graphql";
import ImageLink from "../ImageLink";
import { NextRouter, useRouter } from "next/router";

interface PostContentProps {
	author: NodeWithAuthorToUserConnectionEdge;
	date: string;
	title: string;
	categories: PostToCategoryConnection;
	content: string;
	uri: string;
}

const PostContent = ({
	author,
	date,
	title,
	categories,
	content,
	uri,
}: PostContentProps): JSX.Element => {
	const dateFormated = format(new Date(date), "do MMMM yyyy");

	const twitterShareLink = `https://twitter.com/intent/tweet?text=https://www.friday.ie/blog${uri}`;
	const linkedInShareLink = `http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.friday.ie/blog${uri}`;
	const faceBookShareLink = `https://www.facebook.com/sharer/sharer.php?u=https://www.friday.ie/blog${uri}`;

	const router: NextRouter = useRouter();

	const handleAuthorClick = (author: string) => {
		router.push({ pathname: "/blog", query: { author } });
	};

	const handleCategoryClick = (category: Category) => {
		router.push({
			pathname: "/blog",
			query: { categorySlug: category?.slug, currentCategory: category?.name },
		});
	};

	return (
		<article className={styles.article}>
			<Section customClass={styles.section}>
				<div className={styles.intro}>
					<div className={styles.author}>
						<span className={styles.image}>
							<Image
								src={author?.node?.avatar?.url}
								alt={author?.node?.name}
								layout="fill"
								objectFit="cover"
							/>
						</span>
						<span className={styles.date}>{dateFormated} - </span>
						<span onClick={() => handleAuthorClick(author?.node?.name)} className={styles.name}>
							{author?.node?.name}
						</span>
					</div>
					<h1 className={styles.title}>{title}</h1>
					<ul className={styles.categories}>
						{categories?.nodes?.map((category: Category, index: number) => (
							<li key={`category?.id-${index}`} onClick={() => handleCategoryClick(category)}>
								{category?.name}
							</li>
						))}
					</ul>
				</div>
				<div className={styles.content}>
					<Editor copy={content} />
				</div>
				<div className={styles.social}>
					<p>Share:</p>
					<ul>
						<li>
							<ImageLink
								imageSrc="/images/icon-tw-black.svg"
								linkUrl={twitterShareLink}
								imageAlt="Twitter Logo"
								externalLink={true}
								objectFit="contain"
							/>
						</li>
						<li>
							<ImageLink
								imageSrc="/images/icon-li-black.svg"
								linkUrl={linkedInShareLink}
								imageAlt="Linkedin Logo"
								externalLink={true}
								objectFit="contain"
							/>
						</li>
						<li>
							<ImageLink
								imageSrc="/images/icon-fb-black.svg"
								linkUrl={faceBookShareLink}
								imageAlt="Linkedin Logo"
								externalLink={true}
								objectFit="contain"
							/>
						</li>
					</ul>
				</div>
				<div className={styles.footer}>
					<div className={styles.author}>
						<div className={styles.image}>
							<Image
								src={author?.node?.avatar?.url}
								alt={author?.node?.name}
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>
					<div className={styles.name} onClick={() => handleAuthorClick(author?.node?.name)}>
						{author?.node?.name}
					</div>
					<p className={styles.description}>{author?.node?.description}</p>
				</div>
			</Section>
		</article>
	);
};

export default PostContent;
