import Link from 'next/link';
import cx from 'classnames';

import styles from './CtaButton.module.scss';

/**
 * CtaButton Component
 * @author Brian Whelan
 *
 * @param {string} url The href for the button
 * @param {string} title The title for the button
 * @param {"white" | "red" | "black"} colour The colour of the button
 * @param {string} screenReaderText Hidden text for screenreaders
 * @param {string} customClass Custom class for the button
 *
 * @returns The call to action button
 */

interface CtaButtonProps {
  url: string;
  title: string;
  colour?: 'white' | 'red' | 'black' | 'solid';
  screenReaderText?: string;
  customClass?: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  url,
  title,
  colour,
  screenReaderText,
  customClass,
}) => {
  const removeHttp = (url: string) => {
    return url.replace(/^https?:\/\//, '');
  };
  let strippedUrl: string = removeHttp(url);

  const strippedWordpressUrl: string = removeHttp(process.env.NEXT_PUBLIC_WORDPRESS_URL);
  const strippedFrontendUrl: string = removeHttp(process.env.NEXT_PUBLIC_LOCAL_URL);

  if (strippedUrl.includes(strippedWordpressUrl)) {
    strippedUrl = strippedUrl.replace(strippedWordpressUrl, '');
  }
  if (strippedUrl.includes(strippedFrontendUrl)) {
    strippedUrl = strippedUrl.replace(strippedFrontendUrl, '');
  }

  return (
    <Link href={strippedUrl}>
      <a
        className={cx(
          styles.button,
          { [styles[colour]]: colour },
          { [styles[customClass]]: customClass }
        )}
      >
        <span>{title}</span>
        {screenReaderText && <span className="visuallyhidden">{screenReaderText}</span>}
      </a>
    </Link>
  );
};

export default CtaButton;
