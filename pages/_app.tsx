import '../styles/main.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/router';
import Script from 'next/script';
import type { AppProps } from 'next/app';

import WpProvider, { WpState } from '../components/context/wordpressContext';
import { GTM_ID, pageview } from '../lib/gtm';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Extract the menus and recent posts so we can add  them to the wp context
  const { menus, footerData, ...passThroughProps }: WpState = pageProps;

  // Create the state object to add as value to wpcontext
  const state = {
    menus,
    footerData,
  };

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);

  return (
    <>
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                '//www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '${GTM_ID}');
          `,
        }}
      />
      <WpProvider value={state}>
        <Script
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/a0d143f969f9c51a1b783990/script.js"
        ></Script>
        <Component {...passThroughProps} key={router.asPath} />
      </WpProvider>
    </>
  );
};

export default MyApp;
