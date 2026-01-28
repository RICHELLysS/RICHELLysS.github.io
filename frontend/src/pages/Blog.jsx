import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Blog = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [posts, setPosts] = useState([]);

  const content = {
    title: { en: "Blog", zh: "博客" },
    subtitle: { en: "Thoughts, stories and ideas", zh: "思考、故事和想法" }
  };

  useEffect(() => {
    const samplePosts = [
      {
        id: 1,
        title: { en: "About Painting", zh: "关于画" },
        excerpt: { 
          en: "I seem to have some connection with painting. When I was a child, I went to the library not to read literature, but to read comics...", 
          zh: "我好像照画有点缘分，小时候去图书馆的时候不去读文学，而是去看漫画..." 
        },
        date: "2024-01-15",
        slug: "about-painting"
      },
      {
        id: 2,
        title: { en: "My Learning Journey", zh: "我的学习之旅" },
        excerpt: { 
          en: "Reflecting on my journey through technology and design...", 
          zh: "回顾我在技术和设计方面的旅程..." 
        },
        date: "2024-01-10",
        slug: "learning-journey"
      },
      {
        id: 3,
        title: { en: "Future of Web Development", zh: "Web开发的未来" },
        excerpt: { 
          en: "Exploring emerging trends and technologies in web development...", 
          zh: "探索Web开发中的新兴趋势和技术..." 
        },
        date: "2024-01-05",
        slug: "future-web-dev"
      }
    ];
    setPosts(samplePosts);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {t(content.title)}
            </h1>
            <p className="text-lg text-gray-600">
              {t(content.subtitle)}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t(post.title)}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 leading-relaxed">
                  {t(post.excerpt)}
                </p>
                <span className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  Read more →
                </span>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
