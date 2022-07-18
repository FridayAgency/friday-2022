import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

import Section from '../Section';

import styles from './Breadcrumbs.module.scss';

/**
 * Breadcrumbs component
 * @author Brian Whelan
 *
 * @returns Breadcrumbs created from the router object
 *
 */

export interface Path {
  breadcrumb: string;
  href: string;
}

const convertBreadcrumb = (string: string) => {
  return string.replace(/-/g, ' ').replace(/oe/g, 'ö').replace(/ae/g, 'ä').replace(/ue/g, 'ü');
};

const Breadcrumbs: React.FC = () => {
  const router: NextRouter = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<Path>>(null!);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/').filter((item: string) => item.length > 0);

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: convertBreadcrumb(path),
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  return (
    <>
      {breadcrumbs && breadcrumbs.length > 1 && (
        <Section>
          <ul className={styles.breadcrumbs}>
            {breadcrumbs.map((crumb: Path, index: number) => {
              if (index < breadcrumbs.length - 1) {
                return (
                  <li className={styles.breadcrumb} key={crumb.breadcrumb}>
                    <Link href={crumb?.href}>
                      <a>
                        {crumb?.breadcrumb.charAt(0).toUpperCase() + crumb?.breadcrumb.slice(1)}
                      </a>
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li className={styles.last} key={crumb.breadcrumb}>
                    {crumb?.breadcrumb.charAt(0).toUpperCase() + crumb?.breadcrumb.slice(1)}
                  </li>
                );
              }
            })}
          </ul>
        </Section>
      )}
    </>
  );
};

export default Breadcrumbs;
