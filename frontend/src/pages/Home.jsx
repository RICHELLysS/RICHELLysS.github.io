import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <Title />
        {/* Full-width content section */}
        <div className="w-full bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <section className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">关于画</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  我好像照画有点缘分，小时候去图书馆的时候不去读文学，而是去看漫画，对于我来说画面比文字更好理解，有时候就会想一想什么艺术家鉴赏介绍什么的，印象最深的是看到梵高的一幅绿瓶子里插着向日葵的画，一直记在脑子里。
                </p>
                <p>
                  然后在一节美术课上画了红色的百合和紫荆花插在白色花瓶里，还记得以前去上过少年宫的绘画课，听了好多鉴赏，知道了很多艺术家，虽然一直被某人的观点洗脑说艺术家要死后才会出名，在此时赚不了什么钱，但...
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;