import { useState } from 'react';

import type { TextAreaField, FieldError } from '../../../types/graphql';
import useGravityForm, {
  GF_ACTION_TYPES,
  FieldValue,
  StringFieldValue,
} from '../../../hooks/useGravityForm';
import GravityFormsFieldWrapper from '../GravityFormsFieldWrapper';

interface TextareProps {
  field: TextAreaField;
  fieldErrors: FieldError[];
}

const DEFAULT_VALUE = '';

const Textarea = ({ field, fieldErrors }: TextareProps): JSX.Element => {
  const { id, type, label, description, cssClass, isRequired } = field;

  const htmlId = `field_${id}`;

  const { state, dispatch } = useGravityForm();

  const fieldValue = state.find((fieldValue: FieldValue) => fieldValue.id === id) as
    | StringFieldValue
    | undefined;

  const value = fieldValue?.value || DEFAULT_VALUE;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: GF_ACTION_TYPES.updateTextAreaFieldValue,
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
      <textarea
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        name={String(id)}
        id={htmlId}
        // required={Boolean(isRequired)}
        value={value}
        onChange={handleChange}
      />
      <label
        className={`${focused ? 'active' : ''} ${isRequired ? 'required' : ''}`}
        htmlFor={htmlId}
      >
        {label}
      </label>
    </GravityFormsFieldWrapper>
  );
};

export default Textarea;
