import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Title from '../components/Title';
import BlogCarousel from '../components/BlogCarousel';
import { useTheme } from '../context/ThemeContext';

const Blog = () => {
  const { isDarkMode } = useTheme();
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
          en: "Reflecting on my journey through technology and design. This has been an incredible adventure filled with challenges and growth...", 
          zh: "回顾我在技术和设计方面的旅程。这是一段充满挑战和成长的不可思议的冒险..." 
        },
        date: "2024-01-10",
        slug: "learning-journey"
      },
      {
        id: 3,
        title: { en: "Future of Web Development", zh: "Web开发的未来" },
        excerpt: { 
          en: "Exploring emerging trends and technologies in web development. The landscape is constantly evolving with new frameworks and tools...", 
          zh: "探索Web开发中的新兴趋势和技术。随着新框架和工具的出现，格局不断演变..." 
        },
        date: "2024-01-05",
        slug: "future-web-dev"
      },
      {
        id: 4,
        title: { en: "Design Principles", zh: "设计原则" },
        excerpt: { 
          en: "Understanding the core principles of good design and how they apply to modern web applications...", 
          zh: "理解良好设计的核心原则以及它们如何应用于现代Web应用程序..." 
        },
        date: "2023-12-28",
        slug: "design-principles"
      },
      {
        id: 5,
        title: { en: "Building Scalable Systems", zh: "构建可扩展系统" },
        excerpt: { 
          en: "Lessons learned from building and maintaining large-scale applications in production environments...", 
          zh: "从在生产环境中构建和维护大规模应用程序中学到的经验教训..." 
        },
        date: "2023-12-20",
        slug: "scalable-systems"
      },
      {
        id: 6,
        title: { en: "The Art of Code Review", zh: "代码审查的艺术" },
        excerpt: { 
          en: "Best practices for conducting effective code reviews that improve code quality and team collaboration...", 
          zh: "进行有效代码审查的最佳实践，以提高代码质量和团队协作..." 
        },
        date: "2023-12-15",
        slug: "code-review"
      },
      {
        id: 7,
        title: { en: "Performance Optimization", zh: "性能优化" },
        excerpt: { 
          en: "Techniques and strategies for optimizing web application performance and improving user experience...", 
          zh: "优化Web应用程序性能和改善用户体验的技术和策略..." 
        },
        date: "2023-12-10",
        slug: "performance-optimization"
      },
      {
        id: 8,
        title: { en: "Accessibility Matters", zh: "可访问性很重要" },
        excerpt: { 
          en: "Why web accessibility is crucial and how to build inclusive applications that everyone can use...", 
          zh: "为什么Web可访问性至关重要，以及如何构建每个人都可以使用的包容性应用程序..." 
        },
        date: "2023-12-05",
        slug: "accessibility-matters"
      },
      {
        id: 9,
        title: { en: "Testing Strategies", zh: "测试策略" },
        excerpt: { 
          en: "Comprehensive guide to testing modern web applications, from unit tests to end-to-end testing...", 
          zh: "测试现代Web应用程序的综合指南，从单元测试到端到端测试..." 
        },
        date: "2023-11-30",
        slug: "testing-strategies"
      }
    ];
    setPosts(samplePosts);
  }, []);

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
