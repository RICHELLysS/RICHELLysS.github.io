import { useState } from 'react';
import Footer from '../components/Footer';
import Title from '../components/Title';
import BlogCarousel from '../components/BlogCarousel';
import { useTheme } from '../context/ThemeContext';
import { blogPosts } from '../data/blogData';

const Blog = () => {
  const { isDarkMode } = useTheme();
  const [posts] = useState(blogPosts);

  const content = {
    title: { en: "Blog", zh: "博客" },
    subtitle: { en: "Thoughts, stories and ideas", zh: "思考、故事和想法" }
  };

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <main className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <Title title={content.title} subtitle={content.subtitle} />

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <BlogCarousel posts={posts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
