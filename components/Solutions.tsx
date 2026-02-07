
import React from 'react';
import { SOLUTIONS } from '../constants';
import Solution3D from './Solution3D';

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-32 bg-[#f8fafc]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-sm border border-blue-100">
            Our Solutions
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] section-heading-gradient">
            Comprehensive <span className="text-blue-600">Water Management</span>
          </h2>
        </div>

        {/* Featured 3D Spotlight */}
        <div className="mb-32 flex flex-col lg:flex-row items-center gap-16 bg-white p-10 lg:p-16 rounded-[3rem] border border-blue-100/50 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50 group-hover:bg-blue-100 transition-colors"></div>
          
          <div className="lg:w-1/2 w-full order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center space-x-2 text-blue-600 mb-6">
              <span className="w-10 h-[2px] bg-blue-600"></span>
              <span className="text-xs font-black uppercase tracking-widest">Technology Spotlight (ini masih sangat opsional, hanya ketika kita menemukan product campaign kurita)</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-8 leading-tight">
              Ultrapure Water <br/>Generation System
            </h3>
            <p className="text-slate-600 text-xl mb-10 leading-relaxed font-light">
              State-of-the-art filtration system used in advanced semiconductor manufacturing, ensuring resistivity levels of up to 18.2 MΩ·cm.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-12">
              {[
                '0.05µm filtration',
                'Digital Twin Ready',
                'Self-Optimizing AI',
                'Low Energy Usage'
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <i className="fas fa-check text-[10px] text-blue-600"></i>
                  </div>
                  <span className="font-bold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-blue-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-800 transition-all flex items-center shadow-xl shadow-blue-900/10 group">
              Technical Specifications 
              <i className="fas fa-arrow-right ml-4 group-hover:translate-x-2 transition-transform"></i>
            </button>
          </div>
          
          <div className="lg:w-1/2 w-full order-1 lg:order-2 h-[400px] lg:h-[500px] relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-transparent rounded-full blur-3xl"></div>
            <Solution3D />
          </div>
        </div>

        {/* Other Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {SOLUTIONS.map((solution, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-3">
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                  <i className={`fas ${solution.icon} text-2xl`}></i>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h4 className="text-2xl font-black mb-4 text-[#0f172a] tracking-tight group-hover:text-blue-600 transition-colors">{solution.title}</h4>
                <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                  {solution.description}
                </p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center font-black text-blue-600 group/link">
                    Explore Solution 
                    <i className="fas fa-chevron-right ml-3 text-xs group-hover/link:translate-x-2 transition-transform"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
