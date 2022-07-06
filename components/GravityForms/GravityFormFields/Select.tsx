import type { SelectField, FieldError } from "../../../types/graphql";
import GravityFormsFieldWrapper from "../GravityFormsFieldWrapper";
import useGravityForm, {
	GF_ACTION_TYPES,
	FieldValue,
	StringFieldValue,
} from "../../../hooks/useGravityForm";

interface SelectFieldProps {
	field: SelectField;
	fieldErrors: FieldError[];
}

const Select = ({ field, fieldErrors }: SelectFieldProps): JSX.Element => {
	const { id, type, label, description, cssClass, isRequired, defaultValue, choices } = field;

	const htmlId = `field_${id}`;

	const { state, dispatch } = useGravityForm();

	const fieldValue = state.find((fieldValue: FieldValue) => fieldValue.id === id) as
		| StringFieldValue
		| undefined;

	const value = fieldValue?.value;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: GF_ACTION_TYPES.updateSelectFieldValue,
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
			<select name={String(id)} id={htmlId} required={Boolean(isRequired)} value={value}>
				{choices?.map((choice, index) => (
					<option key={`${choice?.value}-${index}`} value={choice?.value}>
						{choice?.text}
					</option>
				))}
			</select>
		</GravityFormsFieldWrapper>
	);
};

export default Select;
