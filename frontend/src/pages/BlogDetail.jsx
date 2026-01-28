import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import Title from '../components/Title';
import Footer from '../components/Footer';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isDarkMode } = useTheme();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    // Scroll to top when blog post changes
    window.scrollTo(0, 0);

    const posts = [
      { id: 1, slug: "about-painting", title: { en: "About Painting", zh: "关于画" } },
      { id: 2, slug: "learning-journey", title: { en: "My Learning Journey", zh: "我的学习之旅" } },
      { id: 3, slug: "future-web-dev", title: { en: "Future of Web Development", zh: "Web开发的未来" } },
      { id: 4, slug: "design-principles", title: { en: "Design Principles", zh: "设计原则" } }
    ];
    setAllPosts(posts);

    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/posts/blog/${slug}.md`);
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

    fetchMarkdown();
  }, [slug]);

  const blogPosts = {
    'about-painting': {
      title: { en: "About Painting", zh: "关于画" },
      date: "2024-01-15",
      content: {
        en: `I seem to have some connection with painting. When I was a child, I went to the library not to read literature, but to read comics.

I remember that when I was in elementary school, I would go to the library every weekend to borrow comic books. The colorful illustrations and engaging stories captivated my imagination. I would spend hours copying my favorite characters, trying to recreate the dynamic poses and expressive faces.

As I grew older, my interest in visual art evolved. I discovered digital painting and graphic design, which opened up a whole new world of creative possibilities. The ability to blend traditional artistic techniques with modern technology fascinated me.

Today, I continue to explore the intersection of art and technology in my work. Whether it's designing user interfaces, creating illustrations, or experimenting with generative art, painting and visual creativity remain at the core of what I do.`,
        zh: `我好像照画有点缘分，小时候去图书馆的时候不去读文学，而是去看漫画。

我记得小学的时候，每个周末都会去图书馆借漫画书。五彩缤纷的插图和引人入胜的故事吸引了我的想象力。我会花几个小时临摹我最喜欢的角色，试图重现动态的姿势和富有表现力的面孔。

随着年龄的增长，我对视觉艺术的兴趣也在不断发展。我发现了数字绘画和平面设计，这为我打开了一个全新的创意世界。将传统艺术技巧与现代技术相结合的能力让我着迷。

今天，我继续在工作中探索艺术与技术的交集。无论是设计用户界面、创作插图，还是尝试生成艺术，绘画和视觉创造力仍然是我工作的核心。`
      }
    },
    'learning-journey': {
      title: { en: "My Learning Journey", zh: "我的学习之旅" },
      date: "2024-01-10",
      content: {
        en: `Reflecting on my journey through technology and design. This has been an incredible adventure filled with challenges and growth.

Starting from the basics of HTML and CSS, I gradually expanded my knowledge to include JavaScript, React, and various backend technologies. Each new skill opened doors to more complex and interesting projects.

The most valuable lesson I've learned is that the learning never stops. Technology evolves rapidly, and staying curious and adaptable is essential. I've embraced this continuous learning mindset, always seeking to improve and explore new areas.

Collaboration has also been a crucial part of my journey. Working with talented designers, developers, and product managers has taught me the importance of communication, empathy, and teamwork in creating successful products.`,
        zh: `回顾我在技术和设计方面的旅程。这是一段充满挑战和成长的不可思议的冒险。

从HTML和CSS的基础开始，我逐渐扩展了我的知识，包括JavaScript、React和各种后端技术。每一项新技能都为更复杂和有趣的项目打开了大门。

我学到的最宝贵的教训是学习永无止境。技术发展迅速，保持好奇心和适应能力至关重要。我接受了这种持续学习的心态，总是寻求改进和探索新领域。

协作也是我旅程中至关重要的一部分。与才华横溢的设计师、开发人员和产品经理合作，让我明白了沟通、同理心和团队合作在创造成功产品中的重要性。`
      }
    },
    'future-web-dev': {
      title: { en: "Future of Web Development", zh: "Web开发的未来" },
      date: "2024-01-05",
      content: {
        en: `Exploring emerging trends and technologies in web development. The landscape is constantly evolving with new frameworks and tools.

WebAssembly is enabling high-performance applications in the browser. AI and machine learning are being integrated into web applications in innovative ways. Progressive Web Apps continue to blur the line between web and native applications.

The focus on performance, accessibility, and user experience has never been stronger. Modern frameworks like React, Vue, and Svelte are making it easier to build complex, interactive applications while maintaining good performance.

Looking ahead, I'm excited about the possibilities of edge computing, serverless architectures, and the continued evolution of web standards. The future of web development is bright and full of opportunities.`,
        zh: `探索Web开发中的新兴趋势和技术。随着新框架和工具的出现，格局不断演变。

WebAssembly正在浏览器中实现高性能应用程序。人工智能和机器学习正以创新的方式集成到Web应用程序中。渐进式Web应用程序继续模糊Web和原生应用程序之间的界限。

对性能、可访问性和用户体验的关注从未如此强烈。React、Vue和Svelte等现代框架使构建复杂的交互式应用程序变得更容易，同时保持良好的性能。

展望未来，我对边缘计算、无服务器架构和Web标准的持续发展的可能性感到兴奋。Web开发的未来是光明的，充满机遇。`
      }
    },
    'design-principles': {
      title: { en: "Design Principles", zh: "设计原则" },
      date: "2023-12-28",
      content: {
        en: `Understanding the core principles of good design and how they apply to modern web applications.

Good design is invisible. It guides users naturally through their tasks without drawing attention to itself. Consistency, hierarchy, and clarity are fundamental principles that create intuitive user experiences.

Color theory, typography, and spacing all play crucial roles in creating visually appealing and functional interfaces. The best designs balance aesthetics with usability, ensuring that beauty never comes at the expense of functionality.

Responsive design is no longer optional—it's essential. Our applications must work seamlessly across devices of all sizes, adapting gracefully to different screen sizes and input methods.`,
        zh: `理解良好设计的核心原则以及它们如何应用于现代Web应用程序。

好的设计是看不见的。它自然地引导用户完成任务，而不会引起注意。一致性、层次结构和清晰度是创建直观用户体验的基本原则。

色彩理论、排版和间距在创建视觉吸引力和功能性界面方面都起着至关重要的作用。最好的设计在美学和可用性之间取得平衡，确保美丽永远不会以牺牲功能为代价。

响应式设计不再是可选的——它是必不可少的。我们的应用程序必须在各种尺寸的设备上无缝工作，优雅地适应不同的屏幕尺寸和输入方法。`
      }
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <Title title={{ en: "Blog Post Not Found", zh: "博客文章未找到" }} />
        <main className={`flex-1 flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="text-center">
            <h1 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Blog Post Not Found
            </h1>
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
      <Title title={post.title} subtitle={{ en: "Blog Post", zh: "博客文章" }} />
      <main className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <article className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
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
            {t(post.title)}
          </h1>

          <p className={`text-sm mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {post.date}
          </p>

          {loading ? (
            <div className={`text-left py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Loading...
            </div>
          ) : markdown ? (
            <div className={`prose prose-lg max-w-none text-left ${isDarkMode ? 'prose-invert' : ''}`}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
            </div>
          ) : post ? (
            <div className={`prose prose-lg max-w-none text-left ${isDarkMode ? 'prose-invert' : ''}`}>
              <div className="text-lg leading-relaxed whitespace-pre-line text-gray-500">
                {t(post.content)}
              </div>
            </div>
          ) : null}

          {/* Navigation */}
          {allPosts.length > 0 && (() => {
            const currentIndex = allPosts.findIndex(p => p.slug === slug);
            const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
            const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

            return (
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-300">
                {previousPost ? (
                  <button
                    onClick={() => navigate(`/blog/${previousPost.slug}`)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-70">Previous</div>
                      <div className="font-medium">{t(previousPost.title)}</div>
                    </div>
                  </button>
                ) : (
                  <div></div>
                )}

                {nextPost ? (
                  <button
                    onClick={() => navigate(`/blog/${nextPost.slug}`)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className="text-right">
                      <div className="text-xs opacity-70">Next</div>
                      <div className="font-medium">{t(nextPost.title)}</div>
                    </div>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            );
          })()}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
