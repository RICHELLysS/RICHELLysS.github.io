import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { blogPosts } from '../data/blogData';
import Title from '../components/Title';
import Footer from '../components/Footer';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { isDarkMode } = useTheme();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  const currentPost = blogPosts.find(p => p.slug === slug);
  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  useEffect(() => {
    // Scroll to top when blog post changes
    window.scrollTo(0, 0);

    const fetchMarkdown = async () => {
      setLoading(true);
      try {
        // Fetch from language-specific folder
        const response = await fetch(`/posts/blog/${language}/${slug}.md`);
        
        if (response.ok) {
          const text = await response.text();
          setMarkdown(text);
        } else {
          console.error('Markdown file not found');
        }
      } catch (error) {
        console.error('Error loading markdown:', error);
      } finally {
        setLoading(false);
      }
    };

    if (currentPost) {
      fetchMarkdown();
    }
  }, [slug, language, currentPost]);

  if (!currentPost) {
    return (
      <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <Title title={{ en: "Post Not Found", zh: "文章未找到" }} />
        <main className={`flex-1 flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="text-center">
            <h1 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Post Not Found</h1>
            <button
              onClick={() => navigate('/blog')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Back to Blog
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Title title={currentPost.title} subtitle={{ en: "Blog Post", zh: "博客文章" }} />
      <main className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <button
            onClick={() => navigate('/blog')}
            className={`mb-6 flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </button>

          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {t(currentPost.title)}
          </h1>

          <p className={`text-sm mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {currentPost.date}
          </p>

          <article className={`prose prose-lg max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
              </ReactMarkdown>
            )}
          </article>

          {/* Navigation between posts */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-4">
            {previousPost ? (
              <button
                onClick={() => navigate(`/blog/${previousPost.slug}`)}
                className={`flex-1 p-4 rounded-lg border transition-all hover:scale-105 text-left ${
                  isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {language === 'en' ? '← Previous Post' : '← 上一篇文章'}
                </span>
                <p className={`font-bold mt-1 line-clamp-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {t(previousPost.title)}
                </p>
              </button>
            ) : <div className="flex-1"></div>}

            {nextPost ? (
              <button
                onClick={() => navigate(`/blog/${nextPost.slug}`)}
                className={`flex-1 p-4 rounded-lg border transition-all hover:scale-105 text-right ${
                  isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {language === 'en' ? 'Next Post →' : '下一篇文章 →'}
                </span>
                <p className={`font-bold mt-1 line-clamp-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {t(nextPost.title)}
                </p>
              </button>
            ) : <div className="flex-1"></div>}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
