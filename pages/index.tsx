import { Suspense, useEffect, useState } from 'react';

import { GetStaticProps } from 'next';

import {
  getPostTypeStaticProps,
  PostTypeStaticProps,
} from '../lib/postTypes/getPostTypeStaticProps';

import PageHead from '../components/PageHead';
import Layout from '../components/Layout';

import type { Page, Post } from '../types/graphql';
import PageHeader from '../components/PageHeader';
import Posts from '../components/Posts';
import dynamic from 'next/dynamic';

const PagePanels = dynamic(() => import('../components/PagePanels'));

interface HomeProps {
  content: Page;
  posts?: Array<Post>;
  slug?: string;
}

const postType = 'page';

const Home = ({ content: page, posts, slug }: HomeProps): JSX.Element => {
  const [mounted, setMounted] = useState<Boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Layout>
      <PageHead
        seoData={page?.seo}
        title={page?.standardPageHeader?.pageCustomTitle ?? page?.title}
      />
      <PageHeader slug={slug ?? page?.slug} title={'1 + 1 = 3'} />

      {mounted && (
        <Suspense fallback={null}>
          <PagePanels panels={page?.pagePanels} />
        </Suspense>
      )}
      <Posts
        title="Blog"
        posts={posts}
        pagination={false}
        padding="both"
        morePostsButton={true}
        alignment={'centre'}
      />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (): Promise<PostTypeStaticProps> => {
  const uri = '/';
  return getPostTypeStaticProps(uri, postType);
};
