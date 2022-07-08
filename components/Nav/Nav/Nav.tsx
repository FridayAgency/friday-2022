import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Menu from '../Menu/Menu';
import Logo from '../../Logo';
import MobileExpandedMenu from '../MobileExpandedMenu';
import { useWpContext } from '../../context/wordpressContext';

import styles from './Nav.module.scss';

/**
 * Nav Component
 *
 * @author Brian Whelan
 *
 * @returns The site navigation
 */

const Nav: React.FC = () => {
  const { menus } = useWpContext();
  const [mainMenu] = menus;

  const [scrolled, setScrolled] = useState<Boolean>(false);
  const [darkNav, setDarkNav] = useState<Boolean>(false);
  const [transparentLogo, setTransparentLogo] = useState<Boolean>(false);

  let navStyle = 'wrapper-red';
  let logoStyle: 'red' | 'white' = 'white';
  if (scrolled || darkNav) {
    navStyle = 'wrapper-white';
    logoStyle = 'red';
  }

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/work/') setDarkNav(true);

    if (router.pathname === '/work/[...uri]') setTransparentLogo(true);
    const onScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
        if (router.pathname === '/work/[...uri]') setTransparentLogo(false);
      } else {
        setScrolled(false);
        if (router.pathname === '/work/[...uri]') setTransparentLogo(true);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [router.asPath, router.pathname]);

  //  Set state to show or hide mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick = () => setShowMobileMenu(!showMobileMenu);

  return (
    <div
      className={`${styles.wrapper} ${styles[navStyle]} ${
        scrolled ? styles.shadow : ''
      }`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              {transparentLogo ? (
                <div className={styles['logo-image']}>
                  <Image
                    src="/images/friday_logo_full.png"
                    layout="fill"
                    objectFit="cover"
                    alt="Friday Logo"
                    priority={true}
                  />
                </div>
              ) : (
                <Logo colour={logoStyle} />
              )}
              <span className="visuallyhidden">Home</span>
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Menu menu={mainMenu} className={styles['menu-primary']} />

          <MobileExpandedMenu
            menu={mainMenu}
            className={styles['menu-mobile']}
            showMenu={showMobileMenu}
            setShowMobile={setShowMobileMenu}
          />

          <Menu
            menu={mainMenu}
            className={`${styles['menu-mobile__sticky']} ${
              scrolled ? styles['show'] : ''
            }`}
            showLogo
          />
        </nav>
        <button
          className={`${styles.burger} ${showMobileMenu ? styles.active : ''} ${
            darkNav ? styles.dark : ''
          } ${scrolled ? styles.fixed : null} ${scrolled ? styles.dark : null}`}
          aria-haspopup="true"
          aria-expanded={showMobileMenu}
          aria-label={`${
            showMobileMenu ? 'Close Navigation' : 'Open Navigation'
          }`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Nav;
