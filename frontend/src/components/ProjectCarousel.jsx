import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const getCurrentProjects = () => {
    const start = currentIndex * itemsPerPage;
    return projects.slice(start, start + itemsPerPage);
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

  const handleCardClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {getCurrentProjects().map((project) => (
          <div
            key={project.id}
            onClick={() => handleCardClick(project.id)}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {t(project.title)}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {t(project.summary)}
              <span className="text-blue-600 ml-1">(see more)</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4">
        {currentIndex > 0 && (
          <button
            onClick={goToPrev}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div className="flex gap-2">
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

        {currentIndex < totalPages - 1 && (
          <button
            onClick={goToNext}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCarousel;
