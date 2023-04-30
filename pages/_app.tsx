import { DefaultSeo } from 'next-seo';

import { config } from '@/next-seo.config';
import Navbar from '@/components/Navbar';

import '@fontsource/dm-sans';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...config} />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
