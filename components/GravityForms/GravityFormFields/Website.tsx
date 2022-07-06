import type { WebsiteField, FieldError } from "../../../types/graphql";
import useGravityForm, {
	GF_ACTION_TYPES,
	FieldValue,
	StringFieldValue,
} from "../../../hooks/useGravityForm";
import GravityFormsFieldWrapper from "../GravityFormsFieldWrapper";

interface WebsiteFieldProps {
	field: WebsiteField;
	fieldErrors: FieldError[];
}

const DEFAULT_VALUE = "";

const Website = ({ field, fieldErrors }: WebsiteFieldProps): JSX.Element => {
	const { id, type, label, description, cssClass, isRequired, placeholder } = field;

	const htmlId = `field_${id}`;

	const { state, dispatch } = useGravityForm();

	const fieldValue = state.find((fieldValue: FieldValue) => fieldValue.id === id) as
		| StringFieldValue
		| undefined;

	const value = fieldValue?.value || DEFAULT_VALUE;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: GF_ACTION_TYPES.updateWebsiteFieldValue,
			fieldValue: {
				id,
				value: event.target.value,
			},
		});
	};

	return (
		<GravityFormsFieldWrapper
			fieldType={type}
			cssClass={cssClass}
			description={description}
			fieldErrors={fieldErrors}
			wrapperType="div"
		>
			<label htmlFor={htmlId}>{label}</label>
			<input
				type="url"
				name={String(id)}
				id={htmlId}
				required={Boolean(isRequired)}
				placeholder={placeholder}
				value={value}
				onChange={(event) => {
					dispatch({
						type: GF_ACTION_TYPES.updateWebsiteFieldValue,
						fieldValue: {
							id,
							value: event.target.value,
						},
					});
				}}
			/>
		</GravityFormsFieldWrapper>
	);
};

export default Website;
