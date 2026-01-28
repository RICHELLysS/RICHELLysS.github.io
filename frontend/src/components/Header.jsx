import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const myLogo = "Yuqing Jiang";

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className="text-gray-100 font-bold absolute top-0 left-0 right-0 z-50 bg-transparent"
    >
      {/* Desktop Header */}
      <div className="hidden md:flex w-full px-6 lg:px-12 py-4 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-xl text-white hover:text-blue-300 transition-colors drop-shadow-lg">
          {/* <img src="/vite.svg" alt="Logo" className="w-8 h-8" /> */}
          {myLogo}
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition-colors drop-shadow-lg ${isActive('/') ? 'text-blue-300' : 'text-white hover:text-blue-300'}`}
          >
            HOME
          </Link>
          <Link 
            to="/gallery" 
            className={`transition-colors drop-shadow-lg ${isActive('/gallery') ? 'text-blue-300' : 'text-white hover:text-blue-300'}`}
          >
            ART GALLERY
          </Link>
          <Link 
            to="/blog" 
            className={`transition-colors drop-shadow-lg ${isActive('/blog') ? 'text-blue-300' : 'text-white hover:text-blue-300'}`}
          >
            BLOG
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors drop-shadow-lg ${isActive('/about') ? 'text-blue-300' : 'text-white hover:text-blue-300'}`}
          >
            ABOUT ME
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 text-white hover:text-blue-300 transition-colors drop-shadow-lg"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
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
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-gray-900">
          <img src="/vite.svg" alt="Logo" className="w-6 h-6" />
          {myLogo}
        </Link>
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
          >
            {language === 'en' ? '中文' : 'EN'}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 transition-colors relative z-10 text-white drop-shadow-lg"
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