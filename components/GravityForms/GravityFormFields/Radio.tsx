import useGravityForm, {
	GF_ACTION_TYPES,
	FieldValue,
	StringFieldValue,
} from "../../../hooks/useGravityForm";
import GravityFormsFieldWrapper from "../GravityFormsFieldWrapper";

import { RadioField, FieldError } from "../../../types/graphql";

interface RadioFieldProps {
	field: RadioField;
	fieldErrors: FieldError[];
}

const DEFAULT_VALUE = "";

const Radio = ({ field, fieldErrors }: RadioFieldProps): JSX.Element => {
	const { id, type, label, description, cssClass, choices } = field;

	const htmlId = `field_${id}`;

	const { state, dispatch } = useGravityForm();

	const fieldValue = state.find((fieldValue: FieldValue) => fieldValue.id === id) as
		| StringFieldValue
		| undefined;

	const value = fieldValue?.value || DEFAULT_VALUE;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: GF_ACTION_TYPES.updateRadioFieldValue,
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
			wrapperType="fieldset"
		>
			<legend>{label}</legend>
			{choices?.map((input) => {
				const text = input?.text || "";
				const inputValue = input?.value || "";
				return (
					<div key={inputValue}>
						<input
							type="radio"
							name={String(id)}
							id={`choice_${id}_${inputValue}`}
							value={inputValue}
							onChange={handleChange}
						/>
						<label htmlFor={`choice_${id}_${value}`}>{text}</label>
					</div>
				);
			})}
		</GravityFormsFieldWrapper>
	);
};

export default Radio;
