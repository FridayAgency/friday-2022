import type { TimeField, FieldError } from "../../../types/graphql";
import useGravityForm, {
	GF_ACTION_TYPES,
	FieldValue,
	StringFieldValue,
} from "../../../hooks/useGravityForm";
import GravityFormsFieldWrapper from "../GravityFormsFieldWrapper";

interface TimeFieldProps {
	field: TimeField;
	fieldErrors: FieldError[];
}

const DEFAULT_VALUE = "";

const Time = ({ field, fieldErrors }: TimeFieldProps): JSX.Element => {
	const { id, type, label, description, cssClass, isRequired } = field;

	const htmlId = `field_${id}`;

	const { state, dispatch } = useGravityForm();

	const fieldValue = state.find((fieldValue: FieldValue) => fieldValue.id === id) as
		| StringFieldValue
		| undefined;

	const value = fieldValue?.value || DEFAULT_VALUE;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: GF_ACTION_TYPES.updateTimeFieldValue,
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
				type="time"
				name={String(id)}
				id={htmlId}
				required={Boolean(isRequired)}
				value={value}
				onChange={handleChange}
			/>
		</GravityFormsFieldWrapper>
	);
};

export default Time;
