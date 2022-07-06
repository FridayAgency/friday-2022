import Head from "next/head";
import parse from "html-react-parser";
import { PostTypeSeo } from "../../types/graphql";

/**
 * PageHead Component
 *
 * @author Brian Whelan
 *
 * @param {PostTypeSeo} seoData The seo data to output  in the page head
 * @param {string} title The page title
 *
 * @returns The seo tags for the page head.
 */

interface PageHeadProps {
	seoData: PostTypeSeo;
	title: string;
}

const PageHead = ({ seoData, title }: PageHeadProps): JSX.Element => {
	return (
		<>
			{seoData?.fullHead ? (
				<Head>
					<title>{seoData?.title}</title>
					{parse(
						seoData?.fullHead.replaceAll(
							process.env.NEXT_PUBLIC_WORDPRESS_URL,
							process.env.NEXT_PUBLIC_LOCAL_URL
						)
					)}
				</Head>
			) : (
				<Head>{seoData?.title ? <title>{seoData?.title}</title> : <title>{title}</title>}</Head>
			)}
		</>
	);
};

export default PageHead;
