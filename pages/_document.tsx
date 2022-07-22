import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GTM_ID } from '../lib/gtm';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon-precomposed" />
          <link href="/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
          <link href="/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
          <link href="/apple-touch-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
          <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
          <link rel="preconnect" as="script" href="https://active.cookieyes.com"></link>
          <link rel="preconnect" as="script" href="https://www.googletagmanager.com"></link>
          <link rel="preload" href="https://use.typekit.net/zds1mpj.css" />

          <link rel="stylesheet" href="https://use.typekit.net/zds1mpj.css" />
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
