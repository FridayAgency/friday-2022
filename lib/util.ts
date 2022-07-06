/**
 * removeLastTrailingSlash
 */

export const removeLastTrailingSlash = (url) => {
  if (typeof url !== 'string') return url;
  return url.replace(/\/$/, '');
};
