import { allEssays } from 'contentlayer/generated';
import { formatDate } from '@/lib/utils';

import type { GetStaticProps } from 'next';
import type { Essay } from 'contentlayer/generated';

interface Props {
  essays: Essay[];
}

const Home = ({ essays }: Props) => {
  return (
    <div className="max-w-5xl px-16 py-4 mx-auto">
      <h2 className="text-4xl py-6 font-medium">essays crafted with care</h2>

      {essays.map(essay => (
        <div key={essay.slug} className="py-2">
          <p className="text-md text-gray-500">
            {formatDate(new Date(essay.date))}
          </p>
          <h1 className="text-2xl">{essay.title}</h1>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  return { props: { essays: allEssays } };
};

export default Home;
