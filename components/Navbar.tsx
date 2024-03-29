import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="mx-auto px-8 max-w-5xl">
      <div className="flex items-center justify-between py-6">
        <Link href="/" className="font-title font-bold text-3xl tracking-tight">
          Alchemist{"'"}s musings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
