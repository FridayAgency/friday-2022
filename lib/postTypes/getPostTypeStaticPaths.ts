import { getAllPostTypesUris } from "./getAllPostTypeUris";

export type Path = {
	params: {
		uri: Array<string>;
	};
};

export type PathsPromise = {
	paths: Path[];
	fallback: boolean;
};

export const getPostTypeStaticPaths = async (postType: "page" | "post" | "project") => {
	const { postTypeUris } = await getAllPostTypesUris(postType);

	const paths = postTypeUris.map((post) => {
		// Trim leading and trailing slashes then split into array on inner slashes.
		const uri = post.uri.replace(/^\/|\/$/g, "").split("/");
		return {
			params: {
				uri: postType === "page" ? uri : [post?.slug],
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};
