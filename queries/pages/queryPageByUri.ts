import { gql } from '@apollo/client';

import { SeoFragment } from '../fragments/seo';
import { PagePanelsFragment } from '../fragments/pagePanels';

export const GET_PAGE_BY_URI = gql`
  query PageByUri($uri: ID!, $idType: PageIdType!, $asPreview: Boolean = false) {
    page(id: $uri, idType: $idType, asPreview: $asPreview) {
      id
      slug
      title
      uri
      standardPageHeader {
        pageCustomTitle
      }
      contactPage {
        contactCompanyAddress
        contactSecondaryContent
        fieldGroupName
        googleMap {
          latitude
          longitude
        }
      }
      isPreview
      revisions(where: { orderby: { field: MODIFIED, order: DESC } }, first: 1) {
        nodes {
          id
          slug
          title
          uri
          standardPageHeader {
            pageCustomTitle
          }
          isPreview
          contactPage {
            contactCompanyAddress
            contactSecondaryContent
            fieldGroupName
            googleMap {
              latitude
              longitude
            }
          }
          pagePanels {
            ...PagepanelsFragment
          }
          seo {
            ...PostTypeSEOFragment
          }
        }
      }
      pagePanels {
        ...PagepanelsFragment
      }
      seo {
        ...PostTypeSEOFragment
      }
    }
  }
  ${SeoFragment}
  ${PagePanelsFragment}
`;
