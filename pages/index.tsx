import Link from 'next/link';

import { allEssays } from 'contentlayer/generated';
import { formatDate } from '@/lib/utils';

import type { GetStaticProps } from 'next';
import type { Essay } from 'contentlayer/generated';

interface Props {
  essays: Essay[];
}

const Home = ({ essays }: Props) => {
  return (
    <div className="max-w-5xl px-8 py-4 mx-auto">
      <h2 className="text-2xl pb-4 font-title font-semibold">
        Essays crafted with care ✨
      </h2>

      {essays.map(essay => (
        <div key={essay.slug} className="py-2">
          <Link href={essay.slug}>
            <h1 className="text-xl font-medium">{essay.title}</h1>
          </Link>
          <p className="text-md text-gray-500">
            {formatDate(new Date(essay.date))}
          </p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const allSortedEssays = allEssays.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) return -1;
    if (new Date(a.date) < new Date(b.date)) return 1;
    return 0;
  });

  return { props: { essays: allSortedEssays } };
};

export default Home;
