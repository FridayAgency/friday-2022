import { useState } from 'react';

import type { EmailField, FieldError } from '../../../types/graphql';
import useGravityForm, {
  GF_ACTION_TYPES,
  FieldValue,
  EmailFieldValue,
} from '../../../hooks/useGravityForm';
import GravityFormsFieldWrapper from '../GravityFormsFieldWrapper';

interface EmailFieldProps {
  field: EmailField;
  fieldErrors: FieldError[];
}

const DEFAULT_VALUE = '';

const Email = ({ field, fieldErrors }: EmailFieldProps): JSX.Element => {
  const { id, type, label, description, cssClass, isRequired, placeholder } =
    field;
  const htmlId = `field_${id}`;
  const { state, dispatch } = useGravityForm();
  const fieldValue = state.find(
    (fieldValue: FieldValue) => fieldValue.id === id
  ) as EmailFieldValue | undefined;
  const value = fieldValue?.emailValues?.value || DEFAULT_VALUE;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: GF_ACTION_TYPES.updateEmailFieldValue,
      fieldValue: {
        id,
        emailValues: {
          value: event.target.value,
        },
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
    if (event.animationName === 'onAutoFillStart') {
      setFocused(true);
    }

    if (event.animationName === 'onAutoFillCancel') {
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
        type="email"
        name={String(id)}
        id={htmlId}
        required={Boolean(isRequired)}
        placeholder={placeholder ?? ''}
        value={value}
        onChange={handleChange}
        onAnimationStart={handleAutoFill}
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

export default Email;
