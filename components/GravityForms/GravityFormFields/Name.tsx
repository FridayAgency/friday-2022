import type {
	NameField as NameFieldType,
	NameFieldInput,
	FieldError,
} from "../../../types/graphql";

import useGravityForm, {
	GF_ACTION_TYPES,
	FieldValue,
	NameFieldValue,
} from "../../../hooks/useGravityForm";

import GravityFormsFieldWrapper from "../GravityFormsFieldWrapper";

interface NameFieldProps {
	field: NameFieldType;
	fieldErrors: FieldError[];
}

const DEFAULT_VALUE: NameFieldInput = {};

const AUTOCOMPLETE_ATTRIBUTES: { [key: string]: string } = {
	prefix: "honorific-prefix",
	first: "given-name",
	middle: "additional-name",
	last: "family-name",
	suffix: "honorific-suffix",
};

const Name = ({ field, fieldErrors }: NameFieldProps): JSX.Element => {
	const { id, type, label, description, cssClass, inputs } = field;
	const htmlId = `field_${id}`;

	const { state, dispatch } = useGravityForm();

	const fieldValue = state.find((fieldValue: FieldValue) => fieldValue.id === id) as
		| NameFieldValue
		| undefined;

	const nameValues = fieldValue?.nameValues || DEFAULT_VALUE;

	const prefixInput = inputs?.find((input) => input?.key === "prefix");

	const otherInputs = inputs?.filter((input) => input?.key !== "prefix" && !input?.isHidden) || [];

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = event.target;
		const newNameValues = { ...nameValues, [name]: value };

		dispatch({
			type: GF_ACTION_TYPES.updateNameFieldValue,
			fieldValue: {
				id,
				nameValues: newNameValues,
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
			{prefixInput && (
				<>
					<label htmlFor={`input_${id}_${prefixInput.key}`}>{prefixInput.label}</label>
					<select
						name={String(prefixInput?.key)}
						id={`input_${id}_${prefixInput?.key}`}
						autoComplete={AUTOCOMPLETE_ATTRIBUTES.prefix}
						value={nameValues?.prefix}
						onChange={handleChange}
					>
						<option value=""></option>
						{prefixInput.choices?.map((choice) => (
							<option key={choice?.value} value={String(choice?.value)}>
								{String(choice?.text)}
							</option>
						))}
					</select>
				</>
			)}
			{otherInputs.map((input) => {
				const key = input?.key as keyof NameFieldInput;
				const inputLabel = input?.label ?? "";
				const placeholder = input?.placeholder ?? "";
				return (
					<div key={key}>
						<label htmlFor={`input=_${id}_${key}`}>{inputLabel}</label>
						<input
							type="text"
							name={String(key)}
							id={`input_${id}_${key}`}
							placeholder={placeholder}
							autoComplete={AUTOCOMPLETE_ATTRIBUTES[key]}
							value={nameValues?.[key] || ""}
							onChange={handleChange}
						/>
					</div>
				);
			})}
		</GravityFormsFieldWrapper>
	);
};

export default Name;
