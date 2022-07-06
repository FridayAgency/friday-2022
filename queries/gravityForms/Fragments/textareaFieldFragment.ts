import { gql } from "@apollo/client";

const TEXT_AREA_FIELD_FIELDS = gql`
	fragment TextAreaFieldFields on TextAreaField {
		id
		label
		description
		cssClass
		isRequired
	}
`;

export default TEXT_AREA_FIELD_FIELDS;
