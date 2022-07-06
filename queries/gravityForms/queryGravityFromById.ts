import { gql } from "@apollo/client";
import * as Fragments from "./Fragments";

export const GET_GRAVITY_FORM_BY_ID = gql`
	query getForm($formId: ID!) {
		gfForm(id: $formId, idType: DATABASE_ID) {
			formId
			title
			description
			button {
				text
			}
			confirmations {
				isDefault
				message
			}
			formFields(first: 500) {
				nodes {
					id
					type
					... on AddressField {
						...AddressFieldFields
					}
					... on CheckboxField {
						...CheckboxFieldFields
					}
					... on DateField {
						...DateFieldFields
					}
					... on EmailField {
						...EmailFieldFields
					}
					... on NameField {
						...NameFieldFields
					}
					... on PhoneField {
						...PhoneFieldFields
					}
					... on RadioField {
						...RadioFieldFields
					}
					... on SelectField {
						...SelectFieldFields
					}
					... on TextField {
						...TextFieldFields
					}
					... on TextAreaField {
						...TextAreaFieldFields
					}
					... on TimeField {
						...TimeFieldFields
					}
					... on WebsiteField {
						...WebsiteFieldFields
					}
				}
			}
		}
	}
	${Fragments.addressFieldFragment}
	${Fragments.checkBoxFieldFragment}
	${Fragments.dateFieldFragment}
	${Fragments.emailFieldFragment}
	${Fragments.nameFieldFragment}
	${Fragments.phoneFieldFragment}
	${Fragments.radioFieldFragment}
	${Fragments.selectFieldFragment}
	${Fragments.textareaFieldFragment}
	${Fragments.textFieldFragment}
	${Fragments.timeFieldFragment}
	${Fragments.websiteFieldFragment}
`;
