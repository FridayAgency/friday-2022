import pkg from '@apollo/client';
const { ApolloClient, HttpLink, InMemoryCache, gql } = pkg;
import { v4 } from 'uuid';
const WP_HOST = new URL(process.env.NEXT_PUBLIC_WORDPRESS_URL).hostname;

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
  }),
  cache: new InMemoryCache(),
});

export const GET_AUTH_TOKEN = gql`
  mutation LOGIN($input: LoginInput!) {
    login(input: $input) {
      authToken
    }
  }
`;

const getAuthToken = async () => {
  const { data } = await client.mutate({
    mutation: GET_AUTH_TOKEN,
    variables: {
      input: {
        clientMutationId: v4(),
        username: process.env.WORDPRESS_USERNAME || '',
        password: process.env.WORDPRESS_PASSWORD || '',
      },
    },
  });

  return data || {};
};

const initConfig = async () => {
  const data = await getAuthToken();
  const url = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/redirection/v1/redirect`;

  const response = await fetch(url, {
    method: 'GET',
    credentials: 'same-origin', // <-- make sure to include credentials
    headers: {
      'Content-Type': 'Content-Type multipart/form-data',
      Accept: 'application/json',
      Authorization: 'Bearer ' + data?.login?.authToken,
    },
  });
  const redirects = await response.json();
  const redirectsSettings = redirects.items.map((item) => ({
    source: item?.url,
    destination: item?.action_data?.url.replace(process.env.NEXT_PUBLIC_WORDPRESS_URL, ''),
    permanent: true,
  }));

  return {
    reactStrictMode: true,
    trailingSlash: true,
    sassOptions: {
      includePaths: ['node_modules'],
    },
    eslint: {
      dirs: ['src'],
    },

    i18n: {
      locales: ['en'],
      defaultLocale: 'en',
    },
    env: {
      WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
      NEXT_PUBLIC_WORDPRESS_URL: process.env.NEXT_PUBLIC_WORDPRESS_URL,
      NEXT_PUBLIC_LOCAL_URL: process.env.NEXT_PUBLIC_LOCAL_URL,
      WORDPRESS_USERNAME: process.env.WORDPRESS_USERNAME,
      WORDPRESS_PASSWORD: process.env.WORDPRESS_PASSWORD,
      ENVIORNMENT: process.env.ENVIORNMENT,
      NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
      NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
      NEXT_TOKEN: process.env.NEXT_TOKEN,
      NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
    },
    images: {
      domains: [
        'localhost',
        '1.gravatar.com',
        '0.gravatar.com',
        '2.gravatar.com',
        'secure.gravatar.com',
        WP_HOST,
      ],
      deviceSizes: [570, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    async redirects() {
      return redirectsSettings;
    },
  };
};

const nextConf = await initConfig();

export default nextConf;
