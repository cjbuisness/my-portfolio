import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link href="/" className="hover:text-silver">
            My Portfolio
          </Link>
        </h1>
        <nav className="relative">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-2xl hover:text-silver">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-2xl hover:text-silver">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-2xl hover:text-silver">
                Contact
              </Link>
            </li>
            <li className="relative">
              <button
                className="flex items-center hover:text-silver focus:outline-none"
                onClick={toggleDropdown}
              >
                Portfolio
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-10">
                  <Link href="/portfolio" className="block px-4 py-2 text-sm hover:bg-gray-700">
                    Projects
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
