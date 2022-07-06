import { gql } from "@apollo/client";

const CHECKBOX_FIELD_FIELDS = gql`
	fragment CheckboxFieldFields on CheckboxField {
		id
		label
		description
		cssClass
		inputs {
			id
		}
		choices {
			text
			value
		}
	}
`;

export default CHECKBOX_FIELD_FIELDS;
