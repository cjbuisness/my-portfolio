import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link href="/" className="hover:text-silver">
            My Portfolio
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-silver">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-silver">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-silver">
                Portfolio
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
