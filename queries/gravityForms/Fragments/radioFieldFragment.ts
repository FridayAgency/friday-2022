import { gql } from "@apollo/client";

const RADIO_FIELD_FIELDS = gql`
	fragment RadioFieldFields on RadioField {
		id
		label
		description
		cssClass
		choices {
			text
			value
		}
	}
`;

export default RADIO_FIELD_FIELDS;
