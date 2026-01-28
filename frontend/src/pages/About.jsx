import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const content = {
    title: { en: "About Me", zh: "关于我" },
    interestTitle: { en: "Interests", zh: "兴趣爱好" },
    interestContent: {
      en: "I am passionate about technology, design, and innovation. In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and staying up-to-date with the latest trends in web development. I also have a keen interest in UI/UX design and believe that great user experiences are the key to successful products.",
      zh: "我对技术、设计和创新充满热情。在空闲时间，我喜欢探索新的编程语言，为开源项目做贡献，并紧跟网络开发的最新趋势。我对UI/UX设计也有浓厚的兴趣，相信出色的用户体验是成功产品的关键。"
    },
    languageTitle: { en: "Languages", zh: "语言能力" },
    languageContent: {
      en: "I am fluent in both English and Chinese (Mandarin). This bilingual capability allows me to work effectively in diverse, multicultural environments and communicate with teams across different regions. I believe that language skills are essential in today's globalized world.",
      zh: "我精通英语和中文（普通话）。这种双语能力使我能够在多元化、多文化的环境中有效工作，并与不同地区的团队进行沟通。我相信语言技能在当今全球化的世界中至关重要。"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <div className="w-full bg-gradient-to-br from-purple-50 to-blue-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t(content.title)}
            </h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t(content.interestTitle)}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{t(content.interestContent)}</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t(content.languageTitle)}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{t(content.languageContent)}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
