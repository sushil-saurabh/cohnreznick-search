import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://www.cohnreznick.com/-/media/themes/cohnreznick-sites/cohnreznick-site/cohnreznicktheme/images/favicon.ico"
        />
        <Script
          strategy="afterInteractive"
          src="https://assets.adoberesources.net/loader.js?orgId=B6AE2FB962AA82810A495F96%40AdobeOrg&instanceId=cohnreznick&env=prod&geo=va7"
        />
      </Head>
      <body className="open">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
