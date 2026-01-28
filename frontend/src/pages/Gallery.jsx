import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  const content = {
    title: { en: "Art Gallery", zh: "艺术画廊" },
    subtitle: { en: "My Artwork Collection", zh: "我的艺术作品集" }
  };

  const artworks = [
    { id: 1, title: "Artwork 1", image: "https://via.placeholder.com/400x600/FF6B6B/FFFFFF?text=Artwork+1", height: 600 },
    { id: 2, title: "Artwork 2", image: "https://via.placeholder.com/400x400/4ECDC4/FFFFFF?text=Artwork+2", height: 400 },
    { id: 3, title: "Artwork 3", image: "https://via.placeholder.com/400x500/45B7D1/FFFFFF?text=Artwork+3", height: 500 },
    { id: 4, title: "Artwork 4", image: "https://via.placeholder.com/400x450/FFA07A/FFFFFF?text=Artwork+4", height: 450 },
    { id: 5, title: "Artwork 5", image: "https://via.placeholder.com/400x550/98D8C8/FFFFFF?text=Artwork+5", height: 550 },
    { id: 6, title: "Artwork 6", image: "https://via.placeholder.com/400x400/F7DC6F/FFFFFF?text=Artwork+6", height: 400 },
    { id: 7, title: "Artwork 7", image: "https://via.placeholder.com/400x600/BB8FCE/FFFFFF?text=Artwork+7", height: 600 },
    { id: 8, title: "Artwork 8", image: "https://via.placeholder.com/400x500/85C1E2/FFFFFF?text=Artwork+8", height: 500 },
    { id: 9, title: "Artwork 9", image: "https://via.placeholder.com/400x450/F8B739/FFFFFF?text=Artwork+9", height: 450 },
    { id: 10, title: "Artwork 10", image: "https://via.placeholder.com/400x550/52B788/FFFFFF?text=Artwork+10", height: 550 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <div className="w-full bg-gradient-to-br from-pink-50 to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {t(content.title)}
            </h1>
            <p className="text-lg text-gray-600">
              {t(content.subtitle)}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="break-inside-avoid mb-4"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {artwork.title}
                    </h3>
                  </div>
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
