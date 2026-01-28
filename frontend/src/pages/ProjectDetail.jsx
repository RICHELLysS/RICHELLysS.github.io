import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/projects';
import Title from '../components/Title';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  
  const project = projects.find(p => p.id === parseInt(id));
  const currentIndex = projects.findIndex(p => p.id === parseInt(id));
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    // Scroll to top when project changes
    window.scrollTo(0, 0);

    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/posts/projects/${id}.md`);
        if (response.ok) {
          const text = await response.text();
          setMarkdown(text);
        }
      } catch (error) {
        console.error('Error loading markdown:', error);
      } finally {
        setLoading(false);
      }
    };

    if (project) {
      fetchMarkdown();
    }
  }, [id, project]);

  if (!project) {
    return (
      <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <Title title={{ en: "Project Not Found", zh: "项目未找到" }} />
        <main className={`flex-1 flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="text-center">
            <h1 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Project Not Found</h1>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Back to Home
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Title title={project.title} subtitle={{ en: "Project Details", zh: "项目详情" }} />
      <main className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <button
            onClick={() => navigate('/')}
            className={`mb-6 flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>

          <h1 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t(project.title)}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className={`px-4 py-2 text-sm font-medium rounded-full ${
                  isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-700'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {loading ? (
            <div className={`text-left py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Loading...
            </div>
          ) : markdown ? (
            <div className={`prose prose-lg max-w-none text-left ${isDarkMode ? 'prose-invert' : ''}`}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none text-left">
              <p className="text-lg leading-relaxed text-gray-500">
                {t(project.description)}
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-300">
            {previousProject ? (
              <button
                onClick={() => navigate(`/project/${previousProject.id}`)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Previous</div>
                  <div className="font-medium">{t(previousProject.title)}</div>
                </div>
              </button>
            ) : (
              <div></div>
            )}

            {nextProject ? (
              <button
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-right">
                  <div className="text-xs opacity-70">Next</div>
                  <div className="font-medium">{t(nextProject.title)}</div>
                </div>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
