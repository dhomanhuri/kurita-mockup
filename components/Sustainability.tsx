
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
              Sustainability at Kurita
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tight section-heading-gradient">
              Pioneering <br/><span className="text-blue-600">New Value for Water</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed font-light">
              Contributing to a sustainable society by integrating environmental and social impact into our core growth strategy.
            </p>
            
            <div className="space-y-8">
              {[
                { 
                  title: 'Message from Management', 
                  desc: "Leadership's vision for a sustainable future.", 
                  icon: 'fa-user-tie', 
                  color: 'bg-blue-50 text-blue-600' 
                },
                { 
                  title: 'Sustainability & Materiality', 
                  desc: "Our core goals, metrics, and governance system.", 
                  icon: 'fa-diagram-project', 
                  color: 'bg-cyan-50 text-cyan-600' 
                },
                { 
                  title: 'Commitment to Materiality', 
                  desc: 'Progress on our eight key strategic themes.', 
                  icon: 'fa-bullseye', 
                  color: 'bg-emerald-50 text-emerald-600' 
                },
                { 
                  title: 'Social Responsibility', 
                  desc: 'Sustainable procurement and community citizenship.', 
                  icon: 'fa-hand-holding-heart', 
                  color: 'bg-indigo-50 text-indigo-600' 
                },
                { 
                  title: 'Reports & ESG Data', 
                  desc: 'Official sustainability reports and international standards.', 
                  icon: 'fa-file-contract', 
                  color: 'bg-slate-50 text-slate-600' 
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start group">
                  <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6 group-hover:scale-110 transition-transform shadow-sm`}>
                    <i className={`fas ${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-base leading-relaxed font-medium">{item.desc}</p>
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
