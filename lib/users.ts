/**
 * updateUserAvatar
 *
 * @param {string} avatar The Url to the avatar
 *
 * The URL by default that comes from Gravatar / WordPress is not a secure
 * URL. This ends up redirecting to https, but it gives mixed content warnings
 * as the HTML shows it as http. Replace the url to avoid those warnings
 * and provide a secure URL by default
 */

export const updateUserAvatar = (avatar) => {
	return {
		...avatar,
		url: avatar.url?.replace("http://", "https://"),
	};
};
