import { gql } from "@apollo/client";

const TEXT_FIELD_FIELDS = gql`
	fragment TextFieldFields on TextField {
		id
		label
		description
		cssClass
		isRequired
		placeholder
	}
`;

export default TEXT_FIELD_FIELDS;
