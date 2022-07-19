import { getAuthTokenCookie } from "../../utils/cookies";
import { getPreviewRedirectUrl } from "../../utils/redirects";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { getAuthToken } from "../../lib/auth/getAuthToken";

const preview = async (req: NextApiRequest, res: NextApiResponse):Promise<void> => {
	const { postType, preview_id, slug, token} = req.query;

	if((token as string) !== process.env.NEXT_TOKEN){
        return res.status(401).json({message:"Invalid Token"})
    }

	const previewUrl = getPreviewRedirectUrl(postType, preview_id, slug);
	const authTokenCookie = getAuthTokenCookie(req);

	// res.setPreviewData({});

	if (!authTokenCookie) {
		const data = await getAuthToken();

		res.setHeader(
			"Set-Cookie",
			cookie.serialize("auth", String(data?.login?.authToken ?? ""), {
				httpOnly: true,
				secure: "development" !== process.env.NODE_ENV,
				path: "/",
				maxAge: 60, // 1 week
			})
		);

		res.writeHead(307, { Location: previewUrl });
	} else {
		res.writeHead(307, { Location: previewUrl });
	}
	res.end();
};

export default preview;
