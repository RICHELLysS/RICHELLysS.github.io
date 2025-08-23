import React from 'react';

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-8">
          <a 
            href="#" 
            className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            About
          </a>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;