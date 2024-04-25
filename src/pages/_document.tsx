import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://www.cohnreznick.com/-/media/themes/cohnreznick-sites/cohnreznick-site/cohnreznicktheme/images/favicon.ico"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
