import Link from 'next/link';

import styles from './ServiceButton.module.scss';

interface ServiceButtonProps {
  url: string;
  title: string;
}

const ServiceButton = ({ url, title }: ServiceButtonProps): JSX.Element => {
  return (
    <li className={styles.button}>
      <Link href={url.replace(process.env.NEXT_PUBLIC_WORDPRESS_URL, '')} prefetch={false}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

export default ServiceButton;
