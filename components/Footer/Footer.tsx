import Image from 'next/image';
import Link from 'next/link';

import ImageLink from '../ImageLink';
import { useWpContext } from '../context/wordpressContext';
import Editor from '../Editor';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const { footerData } = useWpContext();

  const {
    acfOptionsCompanyDetails: companyDetails,
    acfOptionsSocialMediaUrls: socialMediaUrls,
  } = footerData;

  const stripedNumber: string =
    companyDetails?.footerDetails?.footerPhoneNumber.replace(/\s/g, '-');

  return (
    <footer className={styles.footer}>
      <div className={styles['footer__upper']}>
        <div className={styles.logo}>
          <Image
            src={'/images/friday_logo_mini-white.svg'}
            alt=""
            height={68}
            width={68}
            layout="responsive"
          />
        </div>
        <ul className={styles.social}>
          <li>
            <ImageLink
              imageSrc="/images/icon-tw.svg"
              linkUrl={socialMediaUrls?.socialMediaUrls?.smTwitter}
              imageAlt="Twitter Logo"
              externalLink={true}
              objectFit="contain"
            />
          </li>
          <li>
            <ImageLink
              imageSrc="/images/icon-insta.svg"
              linkUrl={socialMediaUrls?.socialMediaUrls?.smInstagram}
              imageAlt="Instagram Logo"
              externalLink={true}
              objectFit="contain"
            />
          </li>
          <li>
            <ImageLink
              imageSrc="/images/icon-li.svg"
              linkUrl={socialMediaUrls?.socialMediaUrls?.smLinkedin}
              imageAlt="Linkedin Logo"
              externalLink={true}
              objectFit="contain"
            />
          </li>
          <li>
            <ImageLink
              imageSrc="/images/icon-fb.svg"
              linkUrl={socialMediaUrls?.socialMediaUrls?.smFacebook}
              imageAlt="Facebook Logo"
              externalLink={true}
              objectFit="contain"
            />
          </li>
        </ul>

        <Editor
          className={styles.address}
          copy={companyDetails?.footerDetails?.footerTitle}
        />

        <div className={styles.contact}>
          <a
            href={`mailto:${companyDetails?.footerDetails?.footerEmailAddress}`}
          >
            {companyDetails?.footerDetails?.footerEmailAddress}
          </a>
          <a href={`tel:${stripedNumber}`}>
            {companyDetails?.footerDetails?.footerPhoneNumber}
          </a>
        </div>

        <div className={styles.google}>
          <ImageLink
            imageSrc="/images/google_certificate.png"
            linkUrl="https://partnersdirectory.withgoogle.com/partners/8905841539"
            imageAlt="Google Logo"
            externalLink={true}
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles['footer__lower']}>
        <ul className={styles.navigation}>
          <li>
            <span>&copy; Friday {new Date().getFullYear()}</span>
          </li>
          <li>
            <span>
              <Link href={'/privacy-cookies/'}>
                <a>Privacy Policy</a>
              </Link>
            </span>
            |
            <span>
              <Link href={'/cookie-policy/'}>
                <a>Cookie Policy</a>
              </Link>
            </span>
            |
            <span>
              <a href="#" className="cky-banner-element">
                Cookie Settings
              </a>
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
