import cookie from "cookie";
import { IncomingMessage } from "http";
import { NextApiRequest } from "next";

export const parseCookies = (req: NextApiRequest | IncomingMessage) => {
	return cookie.parse(req.headers.cookie ?? "");
};

export const getAuthTokenCookie = (reg: NextApiRequest | IncomingMessage) => {
	const cookies = parseCookies(reg);
	return cookies.auth || null;
};
