import { gql } from "@apollo/client";

const ADDRESS_FIELD_FIELDS = gql`
	fragment AddressFieldFields on AddressField {
		id
		label
		description
		cssClass
		inputs {
			key
			label
			placeholder
		}
	}
`;

export default ADDRESS_FIELD_FIELDS;
