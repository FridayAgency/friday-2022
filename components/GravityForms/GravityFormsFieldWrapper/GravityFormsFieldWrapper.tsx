import type { FieldError } from '../../../types/graphql';
import styles from '../GravityForms.module.scss';

interface FieldWrapperProps {
  fieldType: string;
  cssClass?: string;
  description?: string;
  fieldErrors?: FieldError[];
  children: React.ReactNode;
  wrapperType: 'div' | 'fieldset';
}

const GravityFormsFieldWrapper = ({
  fieldType,
  cssClass,
  description,
  fieldErrors,
  children,
  wrapperType = 'div',
}: FieldWrapperProps): JSX.Element => {
  return wrapperType === 'div' ? (
    <div
      className={`${styles.gfield} gfield-${fieldType.toLowerCase() ?? ''} ${
        cssClass ?? ''
      } gfield`.trim()}
    >
      {children}
      {description ? <p className="field-description">{description}</p> : null}
      {fieldErrors?.length
        ? fieldErrors.map((fieldError) => (
            <p key={fieldError.id} className="error-message">
              {fieldError.message}
            </p>
          ))
        : null}
    </div>
  ) : (
    <fieldset
      className={`${styles.gfield} gfield-${fieldType.toLowerCase() ?? ''} ${
        cssClass ?? ''
      }`.trim()}
    >
      {children}
      {description ? <p className="field-description">{description}</p> : null}
      {fieldErrors?.length
        ? fieldErrors.map((fieldError) => (
            <p key={fieldError.id} className="error-message">
              {fieldError.message}
            </p>
          ))
        : null}
    </fieldset>
  );
};

export default GravityFormsFieldWrapper;
