import { gql } from "@apollo/client";

const SELECT_FIELD_FIELDS = gql`
	fragment SelectFieldFields on SelectField {
		id
		label
		description
		cssClass
		isRequired
		defaultValue
		choices {
			text
			value
		}
	}
`;

export default SELECT_FIELD_FIELDS;
