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
      <h2 className="text-3xl pb-4 font-semibold">essays crafted with care</h2>

      {essays.map(essay => (
        <div key={essay.slug} className="py-2">
          <p className="text-md text-gray-500">
            {formatDate(new Date(essay.date))}
          </p>
          <Link href={essay.slug}>
            <h1 className="text-xl">{essay.title}</h1>
          </Link>
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
