import { gql } from "@apollo/client";

const PHONE_FIELD_FIELDS = gql`
	fragment PhoneFieldFields on PhoneField {
		id
		label
		description
		cssClass
		isRequired
		placeholder
	}
`;

export default PHONE_FIELD_FIELDS;
