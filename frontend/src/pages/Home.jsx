import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <Title />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Your main content goes here */}
          <section className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Welcome to my professional blog. This space is dedicated to sharing insights, 
                experiences, and thoughts on technology, development, and innovation.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;