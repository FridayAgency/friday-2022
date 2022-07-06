import type { TextField, FieldError } from "../../../types/graphql";

import GravityFormsFieldWrapper from "../GravityFormsFieldWrapper";

import useGravityForm, {
	GF_ACTION_TYPES,
	FieldValue,
	StringFieldValue,
} from "../../../hooks/useGravityForm";
import { useState } from "react";

interface TextFieldProps {
	field: TextField;
	fieldErrors: FieldError[];
}

const DEFAULT_VALUE = "";

const Text = ({ field, fieldErrors }: TextFieldProps): JSX.Element => {
	const { id, type, label, description, cssClass, isRequired, placeholder } = field;

	const htmlId = `field_${id}`;

	const { state, dispatch } = useGravityForm();

	const fieldValue = state.find((fieldValue: FieldValue) => fieldValue.id === id) as
		| StringFieldValue
		| undefined;

	const value = fieldValue?.value || DEFAULT_VALUE;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: GF_ACTION_TYPES.updateTextFieldValue,
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

	const handleAutoFill = (event) => {
		if (event.animationName === "onAutoFillStart") {
			setFocused(true);
		}

		if (event.animationName === "onAutoFillCancel") {
			setFocused(false);
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
			<input
				onFocus={toggleFocus}
				onBlur={toggleFocus}
				onAnimationStart={handleAutoFill}
				type="text"
				name={String(id)}
				id={htmlId}
				// required={Boolean(isRequired)}
				placeholder={placeholder || ""}
				value={value}
				onChange={handleChange}
			/>
			<label
				className={`${focused ? "active" : ""} ${isRequired ? "required" : ""}`}
				htmlFor={htmlId}
			>
				{label}
			</label>
		</GravityFormsFieldWrapper>
	);
};

export default Text;
