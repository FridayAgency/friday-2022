import { gql } from "@apollo/client";

const TIME_FIELD_FIELDS = gql`
	fragment TimeFieldFields on TimeField {
		id
		label
		description
		cssClass
		isRequired
	}
`;

export default TIME_FIELD_FIELDS;
