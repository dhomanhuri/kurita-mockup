import React from 'react';
import { NEWS_ITEMS } from '../constants';

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Latest News</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-blue-950">
              Stay Updated with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Kurita Innovations</span>
            </h3>
          </div>
          <button className="mt-8 md:mt-0 flex items-center space-x-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group">
            <span>View All News</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-3xl mb-6 shadow-xl shadow-blue-900/5">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-blue-900 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <time className="text-sm font-bold text-slate-400 flex items-center">
                  <i className="far fa-calendar-alt mr-2 text-blue-500"></i>
                  {item.date}
                </time>
                <h4 className="text-xl font-black text-blue-950 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 font-medium leading-relaxed line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="pt-4 flex items-center text-blue-600 font-bold text-sm">
                  <span className="mr-2">Read More</span>
                  <i className="fas fa-chevron-right text-[10px] transition-transform group-hover:translate-x-1"></i>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
