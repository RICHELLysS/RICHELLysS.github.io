import { useState } from 'react';
import Footer from '../components/Footer';
import Title from '../components/Title';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import artworkImages from '../utils/artworkImages';

const Gallery = () => {
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();
  const [galleryRef, galleryVisible] = useScrollAnimation();

  const content = {
    title: { en: "Art Gallery", zh: "艺术画廊" },
    subtitle: { 
      en: (
        <span>
          My Artwork Collection - Visit my{' '}
          <a 
            href="https://pinterest.com/liangyuli233/_created" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Pinterest
          </a>
        </span>
      ),
      zh: (
        <span>
          我的艺术作品集 - 访问我的{' '}
          <a 
            href="https://pinterest.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Pinterest
          </a>
        </span>
      )
    }
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <main className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <Title title={content.title} subtitle={content.subtitle} />

        <div 
          ref={galleryRef}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-all duration-1000 ${
            isDarkMode ? 'bg-gray-900' : 'bg-white'
          } ${
            galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {artworkImages.map((artwork, index) => (
              <div
                key={artwork.id}
                className="break-inside-avoid mb-4"
                style={{ 
                  animation: galleryVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className={`rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                  <img
                    src={artwork.src}
                    alt={artwork.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
