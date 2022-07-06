import { gql } from "@apollo/client";

const NAME_FIELD_FIELDS = gql`
	fragment NameFieldFields on NameField {
		id
		label
		description
		cssClass
		inputs {
			key
			label
			placeholder
			choices {
				text
				value
			}
		}
	}
`;

export default NAME_FIELD_FIELDS;
