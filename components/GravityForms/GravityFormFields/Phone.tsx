import { useState } from "react";

import useGravityForm, {
	GF_ACTION_TYPES,
	FieldValue,
	StringFieldValue,
} from "../../../hooks/useGravityForm";

import GravityFormsFieldWrapper from "../GravityFormsFieldWrapper";

import type { PhoneField, FieldError } from "../../../types/graphql";

interface PhoneFieldProps {
	field: PhoneField;
	fieldErrors: FieldError[];
}

const DEFAULT_VALUE = "";

const Phone = ({ field, fieldErrors }: PhoneFieldProps): JSX.Element => {
	const { id, type, label, description, cssClass, isRequired, placeholder } = field;

	const htmlId = `field_${id}`;

	const { state, dispatch } = useGravityForm();

	const fieldValue = state.find((fieldValue: FieldValue) => fieldValue.id === id) as
		| StringFieldValue
		| undefined;

	const value = fieldValue?.value || DEFAULT_VALUE;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: GF_ACTION_TYPES.updatePhoneFieldValue,
			fieldValue: {
				id,
				value: event.target.value,
			},
		});
	};

	const [focused, setFocused] = useState<Boolean>(false);

	const toggleFocus = (event) => {
		if (!event.target.value.length) {
			setFocused(!focused);
		}
	};

	return (
		<GravityFormsFieldWrapper
			fieldType={type}
			cssClass={cssClass}
			description={description}
			fieldErrors={fieldErrors}
			wrapperType="div"
		>
			<label
				className={`${focused ? "active" : ""} ${isRequired ? "required" : ""}`}
				htmlFor={htmlId}
			>
				{label}
			</label>
			<input
				onFocus={toggleFocus}
				onBlur={toggleFocus}
				type="tel"
				name={String(id)}
				id={htmlId}
				// required={Boolean(isRequired)}
				placeholder={placeholder ?? ""}
				value={value}
				onChange={handleChange}
			/>
		</GravityFormsFieldWrapper>
	);
};

export default Phone;
