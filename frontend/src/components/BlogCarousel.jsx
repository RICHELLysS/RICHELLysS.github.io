import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const BlogCarousel = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();
  
  const itemsPerPage = 4;
  const totalPages = Math.ceil(posts.length / itemsPerPage);
  
  useEffect(() => {
    setIsAnimating(false);
    const timer = setTimeout(() => setIsAnimating(true), 50);
    return () => clearTimeout(timer);
  }, [currentIndex]);
  
  const getCurrentPosts = () => {
    const start = currentIndex * itemsPerPage;
    return posts.slice(start, start + itemsPerPage);
  };

  const goToNext = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToPage = (index) => {
    setCurrentIndex(index);
  };

  const handleCardClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-8">
        {currentIndex > 0 ? (
          <button
            onClick={goToPrev}
            className="flex-shrink-0 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
            aria-label="Previous"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        ) : (
          <div className="flex-shrink-0 w-14 h-14"></div>
        )}

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCurrentPosts().map((post, index) => (
            <article
              key={post.id}
              onClick={() => handleCardClick(post.slug)}
              className={`rounded-lg p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ${
                isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              } ${
                isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <h2 className={`text-xl font-bold mb-2 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {t(post.title)}
              </h2>
              <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {post.date}
              </p>
              <p className={`leading-relaxed line-clamp-4 mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {t(post.excerpt)}
              </p>
              <span className="inline-block text-blue-600 hover:text-blue-700 font-medium text-sm">
                Read more →
              </span>
            </article>
          ))}
        </div>

        {currentIndex < totalPages - 1 ? (
          <button
            onClick={goToNext}
            className="flex-shrink-0 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
            aria-label="Next"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <div className="flex-shrink-0 w-14 h-14"></div>
        )}
      </div>

      <div className="flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;
