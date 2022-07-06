import { gql } from "@apollo/client";

export const QUERY_FOOTER_DETAILS = gql`
	query GET_FOOTER_DETAILS {
		acfOptionsCompanyDetails {
			footerDetails {
				footerEmailAddress
				footerPhoneNumber
				footerTitle
			}
		}
		acfOptionsSocialMediaUrls {
			socialMediaUrls {
				smFacebook
				smInstagram
				smLinkedin
				smTwitter
			}
		}
	}
`;
