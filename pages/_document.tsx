import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID } from '../lib/gtm';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="/apple-touch-icon.png" rel="apple-touch-icon-precomposed" />
          <link href="/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
          <link href="/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
          <link href="/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}

          <link rel="stylesheet" href="https://use.typekit.net/zds1mpj.css"></link>
          <link
            rel="preload"
            href="/fonts/merriweather/merriweather-v19-latin-regular.woff2"
            as="font"
            crossOrigin="anonymous"
          />
          <link rel="preconnect" as="script" href="https://active.cookieyes.com"></link>
          <link rel="preconnect" as="script" href="https://www.googletagmanager.com"></link>
        </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
