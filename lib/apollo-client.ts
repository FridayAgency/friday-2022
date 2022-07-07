import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

export let client: ApolloClient<NormalizedCacheObject>;

/**
 * getApolloClient Function
 */

export const getApolloClient = () => {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
};

/**
 * createApolloClient Function
 */

export const _createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
    }),
    cache: new InMemoryCache(),
  });
};
