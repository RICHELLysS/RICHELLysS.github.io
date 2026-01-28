import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { backgroundImages, shuffleImages } from '../utils/backgroundImages';
import Header from './Header';

const Title = ({ title, subtitle }) => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);

  const defaultContent = {
    title: { en: "Yuqing Jiang's Portfolio", zh: "Yuqing Jiang的作品集" },
    subtitle: { 
      en: "My technical diary and learning road.", 
      zh: "我的技术日记和学习之路。" 
    }
  };

  const displayTitle = title || defaultContent.title;
  const displaySubtitle = subtitle || defaultContent.subtitle;

  useEffect(() => {
    setShuffledImages(shuffleImages(backgroundImages));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= shuffledImages.length) {
          setShuffledImages(shuffleImages(backgroundImages));
          return 0;
        }
        return nextIndex;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [shuffledImages.length]);

  const currentImage = shuffledImages[currentImageIndex] || backgroundImages[0];

  return (
    <section 
      className="w-full min-h-[60vh] flex items-center justify-center relative transition-all duration-1000"
      style={{
        backgroundImage: `url(${currentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Header />
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          {t(displayTitle)}
        </h1>
        {displaySubtitle && (
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            {t(displaySubtitle)}
          </p>
        )}
      </div>
    </section>
  );
};

export default Title;