import { getApolloClient } from "../apollo-client";
import { QUERY_FOOTER_DETAILS } from "../../queries/footer/queryFooterDetails";
import type { AcfOptionsCompanyDetails, AcfOptionsSocialMediaUrls } from "../../types/graphql";

export type FooterDetails = {
	data: {
		AcfOptionsCompanyDetails: AcfOptionsCompanyDetails;
		AcfOptionsSocialMediaUrls: AcfOptionsSocialMediaUrls;
	};
};

export const getFooterDetails = async (): Promise<FooterDetails> => {
	const apolloClient = getApolloClient();

	const { data: footerData } = await apolloClient.query<FooterDetails>({
		query: QUERY_FOOTER_DETAILS,
	});

	return footerData;
};
