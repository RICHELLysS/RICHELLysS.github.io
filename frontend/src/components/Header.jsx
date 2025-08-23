import { useState } from 'react';

const Header = () => {
  // Menu starts hidden (false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Desktop Header */}
      <div className="hidden md:flex w-full px-6 lg:px-12 py-4 items-center justify-between">
        {/* Logo - Always top left */}
        <div className="text-xl font-bold text-gray-900">
          MeniscusLyS's Blog
        </div>
        
        {/* Navigation - Always top right */}
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            HOME
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            ABOUT
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            TAGS
          </a>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden w-full px-4 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-lg font-bold text-gray-900">
          MeniscusLyS's Blog
        </div>
        
        {/* Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors relative z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu Dropdown - ABSOLUTE POSITIONING */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-40">
            <nav className="py-2">
              <a 
                href="#" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </a>
              <a 
                href="#" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </a>
              <a 
                href="#" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                TAGS
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Optional: Click outside to close menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-30 md:hidden" 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;