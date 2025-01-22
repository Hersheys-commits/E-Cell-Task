import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-4">
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-4 md:hidden">
        <div className="ml-auto">
            <button
            onClick={toggleMenu}
            className="text-gray-700 text-2xl focus:outline-none"
            >
            {menuOpen ? '✖' : '☰'}
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
