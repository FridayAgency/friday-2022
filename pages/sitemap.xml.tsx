import { GetServerSideProps } from 'next';
import { getAllPostTypesUris } from '../lib/postTypes/getAllPostTypeUris';

const generateSiteMap = (urls) => {
  console.log(urls);
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!--We manually set the two URLs we know already-->
      <url>
        <loc>https://friday.ie</loc>
      </url>
      ${urls
        .map((url) => {
          return `
        <url>
        <loc>http://www.friday.ie${url.uri}</loc>
        <lastmod>${url.modified}</lastmod>
        </url>
      `;
        })
        .join('')}
    </urlset>
  `;
};

const SiteMap = () => {};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const [posts, pages, projects] = await Promise.all([
    getAllPostTypesUris('post'),
    getAllPostTypesUris('page'),
    getAllPostTypesUris('project'),
  ]);

  const urls = [...posts.postTypeUris, ...pages.postTypeUris, ...projects.postTypeUris];

  const sitemap = generateSiteMap(urls);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
