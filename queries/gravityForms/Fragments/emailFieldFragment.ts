import { gql } from "@apollo/client";

const EMAIL_FIELD_FIELDS = gql`
	fragment EmailFieldFields on EmailField {
		id
		label
		description
		cssClass
		isRequired
		placeholder
	}
`;

export default EMAIL_FIELD_FIELDS;
