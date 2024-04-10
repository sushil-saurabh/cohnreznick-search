import '@/styles/main.scss';
import { Environment, WidgetsProvider } from '@sitecore-search/react';

import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WidgetsProvider
      env={process.env.NEXT_PUBLIC_SEARCH_ENV as Environment}
      customerKey={process.env.NEXT_PUBLIC_SEARCH_CUSTOMER_KEY}
      apiKey={process.env.NEXT_PUBLIC_SEARCH_API_KEY}
      useToken
      publicSuffix={true}
    >
      <Component {...pageProps} />
    </WidgetsProvider>
  );
}
