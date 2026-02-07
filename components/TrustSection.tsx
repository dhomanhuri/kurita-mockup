
import React from 'react';

const TrustSection: React.FC = () => {
  const certifications = [
    { name: 'UN Global Compact', icon: 'fa-globe-asia' },
    { name: 'CDP A- List', icon: 'fa-chart-line' },
    { name: 'ISO 14001', icon: 'fa-certificate' },
    { name: 'RE100 Member', icon: 'fa-bolt' },
    { name: 'EcoVadis Gold', icon: 'fa-medal' },
    { name: 'SBTi Validated', icon: 'fa-check-double' }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 bg-slate-50 text-slate-400 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-12 border border-slate-100">
            Global Certifications & Standards
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center space-x-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
                <i className={`fas ${cert.icon} text-2xl text-blue-600`}></i>
                <span className="font-black text-slate-900 tracking-tighter text-sm uppercase">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
