import Head from 'next/head';
import Link from 'next/link';

import { useMDXComponent } from 'next-contentlayer/hooks';

import { allEssays } from 'contentlayer/generated';
import { formatDate } from '@/lib/utils';

import type { GetStaticPaths, GetStaticProps } from 'next';
import type { Essay } from 'contentlayer/generated';

interface Props {
  essay: Essay;
}

const components = {
  Head,
  Link
};

const Essay = ({ essay }: Props) => {
  const MDXContent = useMDXComponent(essay.body.code);

  return (
    <div className="max-w-5xl px-8 py-4 mx-auto">
      <h1 className="text-4xl py-2 font-semibold">{essay.title}</h1>
      <hr className="border-2 border-gray-200" />
      <p className="text-md text-gray-500 py-2">
        {formatDate(new Date(essay.date))}
      </p>

      <div className="prose prose-neutral">
        <MDXContent components={components} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  return {
    props: {
      essay: allEssays.find(essay => essay.slug === slug)
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allEssays.map(essay => ({
      params: {
        slug: essay.slug
      }
    })),
    fallback: false
  };
};

export default Essay;
