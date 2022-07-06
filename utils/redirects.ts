export const getPreviewRedirectUrl = (
	postType: string | string[],
	previewPostId: string | string[],
	slug: string | string[]
) => {
	if (!postType || !previewPostId) {
		return "";
	}

	switch (postType) {
		case "post":
			return `/blog/preview/${previewPostId}/`;
		case "page":
			return `/page/preview/${previewPostId}/?slug=${slug}`;
		case "work":
			return `/work/preview/${previewPostId}/`;
		default:
			return "/";
	}
};
