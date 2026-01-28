import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const myLogo = "RICHELLysS";

  const isActive = (path) => location.pathname === path;

  return (
    <header className="text-gray-100 font-bold fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      {/* Desktop Header */}
      <div className="hidden md:flex w-full px-6 lg:px-12 py-4 items-center justify-between">
        <Link to="/" className="text-xl text-gray-900 hover:text-blue-600 transition-colors">
          {myLogo}
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
          >
            HOME
          </Link>
          <Link 
            to="/gallery" 
            className={`transition-colors ${isActive('/gallery') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
          >
            ART GALLERY
          </Link>
          <Link 
            to="/blog" 
            className={`transition-colors ${isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
          >
            BLOG
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
          >
            ABOUT ME
          </Link>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden w-full px-4 py-4 flex items-center justify-between relative">
        <Link to="/" className="text-lg font-bold text-gray-900">
          {myLogo}
        </Link>
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            {language === 'en' ? '中文' : 'EN'}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 transition-colors relative z-10 text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full right-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-40">
            <nav className="pr-2">
              <Link 
                to="/" 
                className={`block font-bold px-4 py-3 hover:bg-gray-50 transition-colors text-center font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                to="/gallery" 
                className={`block font-bold px-4 py-3 hover:bg-gray-50 transition-colors text-center font-medium ${isActive('/gallery') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                ART GALLERY
              </Link>
              <Link 
                to="/blog" 
                className={`block font-bold px-4 py-3 hover:bg-gray-50 transition-colors text-center font-medium ${isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link 
                to="/about" 
                className={`block font-bold px-4 py-3 hover:bg-gray-50 transition-colors text-center font-medium ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT ME
              </Link>
            </nav>
          </div>
        )}
      </div>

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