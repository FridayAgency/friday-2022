import useGravityForm, {
	FieldValue,
	AddressFieldValue,
	GF_ACTION_TYPES,
} from "../../../hooks/useGravityForm";

import GravityFormsFieldWrapper from "../GravityFormsFieldWrapper";
import CountrySelect from "../../CountrySelect";

import { AddressField, AddressFieldInput, FieldError } from "../../../types/graphql";

interface AddressProps {
	field: AddressField;
	fieldErrors: FieldError[];
}

const DEFAULT_VALUE: AddressFieldInput = {};

const AUTOCOMPLETE_ATTRIBUTES: { [key: string]: string } = {
	street: "address-line1",
	lineTwo: "address-line2",
	city: "address-level2",
	state: "address-level1",
	country: "country-name",
};

const Address = ({ field, fieldErrors }: AddressProps): JSX.Element => {
	const { id, type, label, description, cssClass, inputs } = field;
	const htmlId = `field_${id}`;

	const { state, dispatch } = useGravityForm();

	const fieldValue = state.find((fieldValue: FieldValue) => fieldValue.id === id) as
		| AddressFieldValue
		| undefined;

	const addressValues = fieldValue?.addressValues || DEFAULT_VALUE;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		const newAddressValues = { ...addressValues, [name]: value };

		dispatch({
			type: GF_ACTION_TYPES.updateAddressFieldValue,
			fieldValue: {
				id,
				addressValues: newAddressValues,
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
			{inputs?.map((input, index) => {
				const key = input?.key as keyof AddressFieldInput;
				const inputLabel = input?.label || "";
				const placeholder = input?.placeholder || "";
				if (key !== "country") {
					return (
						<div key={`${key}-${index}`}>
							<label htmlFor={`input_${id}_${key}`}>{inputLabel}</label>
							<input
								type="text"
								name={String(key)}
								id={`input_${id}_${key}`}
								placeholder={placeholder}
								autoComplete={AUTOCOMPLETE_ATTRIBUTES[key]}
								value={addressValues?.[key] ?? ""}
								onChange={handleChange}
							/>
						</div>
					);
				} else {
					return (
						<div key={`${key}-${index}`}>
							<label htmlFor={`input_${id}_${key}`}>{inputLabel}</label>
							<CountrySelect
								key={`${key}-${index}`}
								onChange={handleChange}
								selectValue={addressValues?.[key]}
								name={String(key)}
								htmlId={htmlId}
							/>
						</div>
					);
				}
			})}
		</GravityFormsFieldWrapper>
	);
};

export default Address;
