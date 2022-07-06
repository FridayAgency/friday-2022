import { gql } from "@apollo/client";

const SEO_FRAGMENT = `
fragment PostTypeSEOFragment on PostTypeSEO {
    fullHead
    metaDesc
    metaRobotsNofollow
    metaRobotsNoindex
    metaKeywords
    opengraphModifiedTime
    opengraphPublishedTime
    opengraphPublisher
    opengraphSiteName
    opengraphTitle
    opengraphType
    opengraphUrl
    twitterDescription
    title
    twitterTitle
    breadcrumbs{
      text
      url
    }
  }
`;

export default SEO_FRAGMENT;
