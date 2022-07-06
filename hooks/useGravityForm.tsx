import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";

import {
	AddressFieldInput,
	EmailFieldInput,
	NameFieldInput,
	CheckboxFieldInput,
} from "../types/graphql";

export interface FieldValue {
	id: number;
}

export interface AddressFieldValue extends FieldValue {
	addressValues: AddressFieldInput;
}

export interface CheckboxFieldValue extends FieldValue {
	checkboxValues: CheckboxFieldInput[];
}

export interface EmailFieldValue extends FieldValue {
	emailValues: EmailFieldInput;
}

export interface NameFieldValue extends FieldValue {
	nameValues: NameFieldInput;
}

export interface StringFieldValue extends FieldValue {
	value: string;
}

export interface StringFieldValues extends FieldValue {
	values: string[];
}

export type FieldValueUnion =
	| AddressFieldValue
	| CheckboxFieldValue
	| EmailFieldValue
	| NameFieldValue
	| StringFieldValue
	| StringFieldValues;

interface Action {
	type: GF_ACTION_TYPES;
	fieldValue: FieldValueUnion;
}

export enum GF_ACTION_TYPES {
	updateAddressFieldValue = "updateAddressFieldValue",
	updateCheckboxFieldValue = "updateCheckboxFieldValue",
	updateDateFieldValue = "updateDateFieldValue",
	updateEmailFieldValue = "updateEmailFieldValue",
	updateMultiSelectFieldValue = "updateMultiSelectFieldValue",
	updateNameFieldValue = "updateNameFieldValue",
	updatePhoneFieldValue = "updatePhoneFieldValue",
	updateRadioFieldValue = "updateRadioFieldValue",
	updateSelectFieldValue = "updateSelectFieldValue",
	updateTextAreaFieldValue = "updateTextAreaFieldValue",
	updateTextFieldValue = "updateTextFieldValue",
	updateTimeFieldValue = "updateTimeFieldValue",
	updateWebsiteFieldValue = "updateWebsiteFieldValue",
}

const gravityFormsReducer = (state: FieldValueUnion[], action: Action) => {
	const getOtherFieldValues = (id: number) => state.filter((fieldValue) => fieldValue.id !== id);

	switch (action.type) {
		case GF_ACTION_TYPES.updateAddressFieldValue: {
			const { id, addressValues } = action.fieldValue as AddressFieldValue;
			return [...getOtherFieldValues(id), { id, addressValues }];
		}
		case GF_ACTION_TYPES.updateCheckboxFieldValue: {
			const { id, checkboxValues } = action.fieldValue as CheckboxFieldValue;
			return [...getOtherFieldValues(id), { id, checkboxValues }];
		}
		case GF_ACTION_TYPES.updateEmailFieldValue: {
			const { id, emailValues } = action.fieldValue as EmailFieldValue;
			return [...getOtherFieldValues(id), { id, emailValues }];
		}
		case GF_ACTION_TYPES.updateMultiSelectFieldValue: {
			const { id, values } = action.fieldValue as StringFieldValues;
			return [...getOtherFieldValues(id), { id, values }];
		}
		case GF_ACTION_TYPES.updateNameFieldValue: {
			const { id, nameValues } = action.fieldValue as NameFieldValue;
			return [...getOtherFieldValues(id), { id, nameValues }];
		}
		case GF_ACTION_TYPES.updateDateFieldValue:
		case GF_ACTION_TYPES.updatePhoneFieldValue:
		case GF_ACTION_TYPES.updateRadioFieldValue:
		case GF_ACTION_TYPES.updateSelectFieldValue:
		case GF_ACTION_TYPES.updateTextAreaFieldValue:
		case GF_ACTION_TYPES.updateTextFieldValue:
		case GF_ACTION_TYPES.updateTimeFieldValue:
		case GF_ACTION_TYPES.updateWebsiteFieldValue: {
			const { id, value } = action.fieldValue as StringFieldValue;
			return [...getOtherFieldValues(id), { id, value }];
		}
		default:
			throw new Error(`Field value update operation not supported: ${action.type}.`);
	}
};

const GRAVITY_FORMS_DEFAULT_STATE: FieldValueUnion[] = [];

const GravityFormContext = createContext<{ state: FieldValueUnion[]; dispatch: Dispatch<Action> }>({
	state: GRAVITY_FORMS_DEFAULT_STATE,
	dispatch: () => null,
});

interface GravityFormProviderProps {
	children: ReactNode;
}

export const GravityFormProvider = ({ children }: GravityFormProviderProps) => {
	const [state, dispatch] = useReducer(gravityFormsReducer, GRAVITY_FORMS_DEFAULT_STATE);

	return (
		<GravityFormContext.Provider value={{ state, dispatch }}>
			{children}
		</GravityFormContext.Provider>
	);
};

const useGravityForm = () => useContext(GravityFormContext);

export default useGravityForm;
