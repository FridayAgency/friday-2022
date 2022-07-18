import cx from 'classnames';

import styles from './Button.module.scss';

/**
 * Button Component
 *
 * @author Brian Whelan
 *
 * @param {React.ReactNode} children The child elements of the button
 * @param {"Link" | "button"} type The type of button either an a tag or a button
 * @param {string} props.className  The class name for the element
 * @param {string} props.url The href for the a tag
 * @param {Button attributes} rest Attributes for the button tag.
 *
 * @returns A link or a button
 */

interface ButtonProps {
  children: React.ReactNode;
  buttonType: 'link' | 'button';
  className?: 'primary' | 'primary-dark' | 'secondary' | 'secondary-dark';
  url?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType = 'button',
  className,
  url,
  ...rest
}) => {
  const btnClass: string = cx(styles.btn, { [styles[className]]: className });

  return buttonType === 'link' ? (
    <a href={url} className={btnClass}>
      {children}
    </a>
  ) : (
    <button {...rest} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;
