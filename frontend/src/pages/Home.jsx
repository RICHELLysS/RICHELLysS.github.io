import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import ProjectCarousel from '../components/ProjectCarousel';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/projects';

const Home = () => {
  const { t } = useLanguage();

  const content = {
    personalTitle: { en: "Personal Summary", zh: "个人简介" },
    personalContent: {
      en: "I am a passionate developer and designer with a strong background in creating innovative digital solutions. My expertise spans across full-stack development, UI/UX design, and system architecture. I believe in building products that not only function well but also provide exceptional user experiences.",
      zh: "我是一名充满热情的开发者和设计师，在创建创新数字解决方案方面拥有深厚的背景。我的专业知识涵盖全栈开发、UI/UX设计和系统架构。我相信构建不仅功能良好而且提供卓越用户体验的产品。"
    },
    educationTitle: { en: "Education", zh: "教育背景" },
    educationContent: {
      en: "Master of Science in Computer Science - University Name (2020-2022)\nBachelor of Engineering in Software Engineering - University Name (2016-2020)\n\nRelevant coursework: Data Structures, Algorithms, Database Systems, Web Development, Human-Computer Interaction, Machine Learning",
      zh: "计算机科学硕士 - 大学名称 (2020-2022)\n软件工程学士 - 大学名称 (2016-2020)\n\n相关课程：数据结构、算法、数据库系统、Web开发、人机交互、机器学习"
    },
    academicTitle: { en: "Academic", zh: "学术成就" },
    academicContent: {
      en: "Published research papers on web performance optimization and user experience design. Participated in multiple academic conferences and workshops. Received awards for outstanding academic performance and research contributions in the field of computer science.",
      zh: "发表了关于网络性能优化和用户体验设计的研究论文。参加了多个学术会议和研讨会。因在计算机科学领域的杰出学术表现和研究贡献而获奖。"
    },
    projectsTitle: { en: "Technical Projects", zh: "技术项目" }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16">
        <Title />
        
        <div className="w-full bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t(content.personalTitle)}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{t(content.personalContent)}</p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t(content.educationTitle)}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
                <p>{t(content.educationContent)}</p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t(content.academicTitle)}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>{t(content.academicContent)}</p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t(content.projectsTitle)}
              </h2>
              <ProjectCarousel projects={projects} />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;