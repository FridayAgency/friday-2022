import { gql } from "@apollo/client";

export const SUBMIT_FORM = gql`
	mutation SUBMIT_FORM($id: ID!, $fieldValues: [FormFieldValuesInput]!) {
		submitGfForm(input: { id: $id, fieldValues: $fieldValues }) {
			resumeUrl
			errors {
				message
				id
			}
			entry {
				isSubmitted
			}
		}
	}
`;
