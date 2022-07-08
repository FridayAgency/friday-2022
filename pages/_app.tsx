import '../styles/main.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/router';
import Script from 'next/script';
import type { AppProps } from 'next/app';

import WpProvider, { WpState } from '../components/context/wordpressContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Extract the menus and recent posts so we can add  them to the wp context
  const { menus, footerData, ...passThroughProps }: WpState = pageProps;

  // Create the state object to add as value to wpcontext
  const state = {
    menus,
    footerData,
  };

  const router = useRouter();

  return (
    <WpProvider value={state}>
      <Script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/6e1d9eb985813ef8ae239a15/script.js"
      ></Script>
      <Component {...passThroughProps} key={router.asPath} />
    </WpProvider>
  );
};

export default MyApp;
