import React from 'react';
import { PARTNERS } from '../constants';

const PartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">Related Sites & Partners</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {PARTNERS.map((logo, index) => (
            <div 
              key={index} 
              className="group relative flex items-center justify-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 w-full max-w-[240px]"
            >
              <img 
                src={logo} 
                alt={`Partner ${index + 1}`} 
                className="h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
