import { DefaultSeo } from 'next-seo';

import { config } from '@/next-seo.config';

import '@fontsource/dm-sans/700.css';
import '@fontsource/open-sans/400.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...config} />
      <Component {...pageProps} />
    </>
  );
}
