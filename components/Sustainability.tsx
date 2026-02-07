
import React from 'react';

const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
             <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
               <img 
                 src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" 
                 alt="Nature sustainability" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
             </div>
             
             <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-10 rounded-[2.5rem] shadow-2xl z-20 hidden md:block border-4 border-white animate-float">
               <div className="text-5xl font-black mb-2">50%</div>
               <div className="text-xs font-black uppercase tracking-[0.2em] opacity-90 leading-relaxed">
                 CO2 reduction <br/>by 2030 target
               </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8">
              Our CSV Commitment
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight section-heading-gradient">
              Creating Shared Value <br/><span className="text-blue-600">with the Planet</span>
            </h2>
            <p className="text-slate-500 text-xl mb-12 leading-relaxed font-light">
              We define "CSV" as creating value for both society and the economy through our business activities. Our focus is on solving water scarcity and creating sustainable energy cycles.
            </p>
            
            <div className="space-y-8">
              {[
                { title: 'Water Security', desc: 'Ensuring stable water supply for critical industries and communities.', icon: 'fa-shield-halved', color: 'bg-blue-50 text-blue-600' },
                { title: 'Circular Economy', desc: 'Transforming waste into valuable resources through reclamation.', icon: 'fa-arrows-spin', color: 'bg-cyan-50 text-cyan-600' },
                { title: 'Nature Harmony', desc: 'Restoring forest ecosystems and protecting biodiversity.', icon: 'fa-leaf', color: 'bg-emerald-50 text-emerald-600' },
              ].map((item, i) => (
                <div key={i} className="flex items-start group">
                  <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:scale-110 transition-transform shadow-sm`}>
                    <i className={`fas ${item.icon} text-2xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-xl leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
