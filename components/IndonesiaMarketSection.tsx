import React from 'react';

const IndonesiaMarketSection: React.FC = () => {
  const benefits = [
    {
      icon: 'fa-industry',
      title: 'Strategic Industrial Zones',
      description: 'Optimized solutions for major industrial zones in Jabodetabek, Karawang, and Surabaya.'
    },
    {
      icon: 'fa-leaf',
      title: 'Strict Environmental Standards',
      description: 'Helping companies comply with PROPER regulations and Indonesian wastewater emission standards.'
    },
    {
      icon: 'fa-droplet',
      title: 'Water Resource Optimization',
      description: 'Crucial water-saving technologies to address clean water availability challenges in Indonesia.'
    },
    {
      icon: 'fa-users-gear',
      title: 'Expert Local Support',
      description: 'Local technical teams who understand water source characteristics and specific industrial challenges in Indonesia.'
    }
  ];

  return (
    <section id="indonesia-market" className="py-24 bg-gradient-to-b from-blue-950 to-[#000814] text-white overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-cyan-500/5 blur-[100px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-400 mb-4">Indonesia Market Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
              Effective Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Industry in Indonesia
              </span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
              Kurita provides Japanese technology tailored to the water characteristics and needs of manufacturing industries in Indonesia, from automotive to electronics.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <i className={`fas ${benefit.icon} text-blue-400 group-hover:text-white text-xl`}></i>
                  </div>
                  <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-500/20">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial Water Treatment in Indonesia" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold border-2 border-white">
                    ID
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Commitment to Indonesia</p>
                    <p className="text-xs text-blue-300">Supporting Sustainable Industry</p>
                  </div>
                </div>
                <p className="text-sm text-slate-200 italic leading-relaxed">
                  "Kurita's technology helps us achieve up to 30% water efficiency and ensures full compliance with local environmental regulations."
                </p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-blue-600 p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-3xl font-black text-white">20+</p>
              <p className="text-xs font-bold text-blue-100 uppercase tracking-wider">Years in Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndonesiaMarketSection;
