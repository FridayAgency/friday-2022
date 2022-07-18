import cx from 'classnames';

import { useWpContext } from '../context/wordpressContext';
import ImageLink from '../ImageLink';
import Editor from '../Editor';

import styles from './ContactDetails.module.scss';

/**
 * Contact Details
 *
 * @param {string} className A custom class
 * @param {string} address The company address
 * @param {function} handleClick The handleclick function for the show map link
 *
 * @returns The company contact details
 */

interface ContactDetailsprops {
  className?: string;
  address: string;
  handleClick: () => void;
}

const ContactDetails: React.FC<ContactDetailsprops> = ({ className, address, handleClick }) => {
  // Use company details from footer
  const { footerData } = useWpContext();
  const { acfOptionsCompanyDetails: companyDetails, acfOptionsSocialMediaUrls: socialMediaUrls } =
    footerData;

  const stripedNumber: string = companyDetails?.footerDetails?.footerPhoneNumber.replace(
    /\s/g,
    '-'
  );

  return (
    <div className={cx(className, styles.wrapper)}>
      <a className={styles.phone} href={`tel:${stripedNumber}`}>
        {companyDetails?.footerDetails?.footerPhoneNumber ?? ''}
      </a>
      <a
        className={styles.email}
        href={`mailto:${companyDetails?.footerDetails?.footerEmailAddress ?? ''}`}
      >
        {companyDetails?.footerDetails?.footerEmailAddress ?? ''}
      </a>
      <Editor className={styles.address} copy={address} />
      <div className={styles.map} onClick={handleClick}>
        Show Map
      </div>
      <ul>
        <li>
          <ImageLink
            imageSrc="/images/icon-tw-red.svg"
            linkUrl={socialMediaUrls?.socialMediaUrls?.smTwitter}
            imageAlt="Twitter Logo"
            externalLink={true}
            objectFit="contain"
          />
        </li>
        <li>
          <ImageLink
            imageSrc="/images/icon-insta-red.svg"
            linkUrl={socialMediaUrls?.socialMediaUrls?.smInstagram}
            imageAlt="Instagram Logo"
            externalLink={true}
            objectFit="contain"
          />
        </li>
        <li>
          <ImageLink
            imageSrc="/images/icon-li-red.svg"
            linkUrl={socialMediaUrls?.socialMediaUrls?.smLinkedin}
            imageAlt="Linkedin Logo"
            externalLink={true}
            objectFit="contain"
          />
        </li>
        <li>
          <ImageLink
            imageSrc="/images/icon-fb-red.svg"
            linkUrl={socialMediaUrls?.socialMediaUrls?.smFacebook}
            imageAlt="Facebook Logo"
            externalLink={true}
            objectFit="contain"
          />
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;
