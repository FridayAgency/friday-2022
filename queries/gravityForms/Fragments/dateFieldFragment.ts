import { gql } from "@apollo/client";

const DATE_FIELD_FIELDS = gql`
	fragment DateFieldFields on DateField {
		id
		label
		description
		cssClass
		isRequired
		placeholder
	}
`;

export default DATE_FIELD_FIELDS;
