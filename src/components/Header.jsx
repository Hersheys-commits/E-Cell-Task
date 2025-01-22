import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="sticky top-0 w-full bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center space-x-8 p-4">
            <Link to="/profile" className="text-xl text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/home" className="text-xl text-gray-700 hover:text-blue-600">
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
