import {
  getPostTypeStaticProps,
  PostTypeStaticProps,
} from '../lib/postTypes/getPostTypeStaticProps';

import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from '../components/Layout';
import PageHead from '../components/PageHead/PageHead';

import ContactPanel from '../components/ContactPanel';

import dynamic from 'next/dynamic';
const PagePanels = dynamic(() => import('../components/PagePanels'));
const MapContainer = dynamic(() => import('../components/Map'));

import type { GfForm, Page, Post } from '../types/graphql';
import PageHeader from '../components/PageHeader';
import Posts from '../components/Posts';
import { NextRouter, useRouter } from 'next/router';
import Breadcrumbs from '../components/Breadcrumbs';

interface PageProps {
  content: Page;
  gfForm?: GfForm;
  posts?: Array<Post>;
}

const postType = 'page';

const PageComponent = ({ content: page, gfForm, posts }: PageProps) => {
  const router: NextRouter = useRouter();

  return (
    <Layout>
      <PageHead
        seoData={page?.seo}
        title={page?.standardPageHeader?.pageCustomTitle ?? page?.title}
      />
      <PageHeader
        slug={page?.slug}
        title={page?.standardPageHeader?.pageCustomTitle ?? page?.title}
      />
      {router.asPath.includes('expertise') && <Breadcrumbs />}
      {gfForm && (
        <>
          <ContactPanel contactPage={page?.contactPage} form={gfForm} />
          <MapContainer
            lat={page?.contactPage?.googleMap?.latitude}
            long={page?.contactPage?.googleMap?.longitude}
          />
        </>
      )}
      {posts && <Posts posts={posts} pagination={false} padding="both" />}
      {page?.pagePanels && <PagePanels panels={page?.pagePanels} />}
    </Layout>
  );
};

export default PageComponent;

interface StaticPropsParams extends ParsedUrlQuery {
  uri: Array<string>;
}

export const getStaticProps: GetStaticProps = async ({ params }): Promise<PostTypeStaticProps> => {
  const { uri } = params as StaticPropsParams;

  const pageUri = `/${uri.join('/')}/`;
  return getPostTypeStaticProps(pageUri, postType);
};

// export const getStaticPaths: GetStaticPaths = async (): Promise<PathsPromise> => {
// 	return getPostTypeStaticPaths(postType);
// };

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
