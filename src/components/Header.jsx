import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({style}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 w-full bg-white shadow-md shadow-gray-400 z-10" style={style}>
      <div className="container mx-auto px-4">
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-4 md:hidden">
        <div className="ml-auto">
        <button
  onClick={toggleMenu}
  className="text-gray-700 text-2xl focus:outline-none"
>
  {menuOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke="currentColor"
      className="w-10 h-10 text-gray-300"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="3"
  stroke="currentColor"
  className="w-10 h-10 text-gray-300"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4 6h16M4 12h16M4 18h16"
  />
</svg>

  )}
</button>

        </div>
        </div>


        {/* Dropdown Menu */}
        {menuOpen && (
            <div className="flex flex-col items-center justify-center space-y-4 p-4 bg-white md:hidden">
                <Link
                to="/profile"
                className="text-xl text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
                >
                Home
                </Link>
                <Link
                to="/"
                className="text-xl text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
                >
                Grid
                </Link>
                <a
                href="https://www.linkedin.com/in/harsh-sharma-310134298/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-700 hover:text-blue-600"
                onClick={toggleMenu}
                >
                LinkedIn
                </a>
            </div>
            )}


        {/* Desktop Header */}
        <div className="hidden md:flex justify-end items-center space-x-8 p-4">
          <Link to="/profile" className="text-xl text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/" className="text-xl text-gray-700 hover:text-blue-600">
            Grid
          </Link>
          <a
            href="https://www.linkedin.com/in/harsh-sharma-310134298/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-gray-700 hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
