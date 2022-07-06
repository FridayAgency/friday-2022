import { FormField, FieldError } from "../../types/graphql";
import * as GravityFormFields from "./GravityFormFields";

interface GravityFormsFieldPros {
	field: FormField;
	fieldErrors: FieldError[];
}

const GravityFormsField = ({ field, fieldErrors }: GravityFormsFieldPros): JSX.Element => {
	const type = field?.type;

	switch (type) {
		case "ADDRESS":
			return <GravityFormFields.Address field={field} fieldErrors={fieldErrors} />;
		case "CHECKBOX":
			return <GravityFormFields.CheckBox field={field} fieldErrors={fieldErrors} />;
		case "DATE":
			return <GravityFormFields.Date field={field} fieldErrors={fieldErrors} />;
		case "EMAIL":
			return <GravityFormFields.Email field={field} fieldErrors={fieldErrors} />;
		case "PHONE":
			return <GravityFormFields.Phone field={field} fieldErrors={fieldErrors} />;
		case "RADIO":
			return <GravityFormFields.Radio field={field} fieldErrors={fieldErrors} />;
		case "SELECT":
			return <GravityFormFields.Select field={field} fieldErrors={fieldErrors} />;
		case "TEXT":
			return <GravityFormFields.Text field={field} fieldErrors={fieldErrors} />;
		case "TEXTAREA":
			return <GravityFormFields.TextArea field={field} fieldErrors={fieldErrors} />;
		case "TIME":
			return <GravityFormFields.Time field={field} fieldErrors={fieldErrors} />;
		case "WEBSITE":
			return <GravityFormFields.Website field={field} fieldErrors={fieldErrors} />;

		default:
			return <p>{`"${type}" GravityForm field is unsupported.`}</p>;
	}
};

export default GravityFormsField;
