import { gql } from "@apollo/client";

const WEBSITE_FIELD_FIELDS = gql`
	fragment WebsiteFieldFields on WebsiteField {
		id
		label
		description
		cssClass
		isRequired
		placeholder
	}
`;

export default WEBSITE_FIELD_FIELDS;
