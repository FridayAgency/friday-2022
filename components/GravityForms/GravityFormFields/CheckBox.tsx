import { ChangeEventHandler } from "react";

import type { FieldError, CheckboxField, CheckboxFieldInput } from "../../../types/graphql";
import useGravityForm, {
	GF_ACTION_TYPES,
	FieldValue,
	CheckboxFieldValue,
} from "../../../hooks/useGravityForm";
import GravityFormsFieldWrapper from "../GravityFormsFieldWrapper";

interface CheckboxFieldProps {
	field: CheckboxField;
	fieldErrors: FieldError[];
}
const DEFAULT_VALUE: CheckboxFieldInput[] = [];

const Checkbox = ({ field, fieldErrors }: CheckboxFieldProps): JSX.Element => {
	const { id, type, label, description, cssClass, inputs, choices } = field;

	const checkboxInputs =
		choices?.map((choice, index) => ({
			...choice,
			id: inputs?.[index]?.id,
		})) || [];

	const htmlId = `field_${id}`;
	const { state, dispatch } = useGravityForm();

	const fieldValue = state.find((fieldValue: FieldValue) => fieldValue.id === id) as
		| CheckboxFieldValue
		| undefined;

	const checkboxValues = fieldValue?.checkboxValues || DEFAULT_VALUE;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked } = event.target;
		const otherCheckboxValues = checkboxValues.filter(
			(checkboxValue: CheckboxFieldInput) => checkboxValue.inputId !== Number(name)
		);
		const newCheckboxValues = checked
			? [...otherCheckboxValues, { inputId: Number(name), value }]
			: otherCheckboxValues;

		dispatch({
			type: GF_ACTION_TYPES.updateCheckboxFieldValue,
			fieldValue: {
				id,
				checkboxValues: newCheckboxValues,
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
			<legend>{label}</legend>
			{checkboxInputs.map(({ id: inputId, text, value }, index) => (
				<div key={`${inputId}-${index}`}>
					<input
						type="checkbox"
						name={String(inputId)}
						id={`input_${id}_${inputId}`}
						value={String(value)}
						onChange={handleChange}
					/>
					<label htmlFor={`input_${id}_${inputId}`}>{text}</label>
				</div>
			))}
		</GravityFormsFieldWrapper>
	);
};

export default Checkbox;
