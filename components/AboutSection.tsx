
import React from 'react';

const AboutSection: React.FC = () => {
  const stories = [
    {
      subtitle: 'Departure',
      title: 'Water: the beginning of life',
      content: 'Water is giving us blessings. Around 4.6 billion years ago, water was born on the hot and turbulent earth, and after that, the seeds of life were dissolved in the sea, cultivating the first life. Water has an inseparable bond with the earth and life, deeply rooted in our daily lives. However, due to its familiarity, water sometimes fails to recognize its real value and to be overlooked.',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1000',
    },
    {
      subtitle: 'The start of the adventure',
      title: 'The functions of water: supporting industry and society',
      content: 'Water, the source of life, is a substance with a simple yet mysterious power. For example, the smartphones you own cannot be manufactured without high-purity water with almost no impurities. Water treatment also supports industry while reducing the burden on the natural Environment by purifying water discharged from factories and returning it to rivers or the sea, or by recovering and reusing water used within factories.',
      image: 'https://3.bp.blogspot.com/-0mnzymm9NKw/VXZk6bPpscI/AAAAAAAAATQ/2ThIlCbGLN0/s1600/kuncuran%2Bair%2Bbersih.jpg',
    },
    {
      subtitle: 'Trials and growth',
      title: 'Co-evolution with society and industry',
      content: 'Since its foundation in 1949, Kurita has developed the businesses through the water treatment, aiming to create an enriched environment in which nature and humanity are in harmony. Confronting the global environmental issues now facing the planet in earnest and believing in the power of science, we are continuing to take on constant challenges regarding water and maximizing its potential.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1000',
    },
    {
      subtitle: 'The time for rapid progress',
      title: 'Pursuing the value of water and shaping the future',
      content: "To enrich our daily lives without sacrificing the planet is Kurita's mission. Until now and from now on, we will renew our resolve to save the environment of Earth beyond by exploring the ultimate possibility of water-limited, supporting industries, and contributing to society. To preserve the enriched and blessings of water for future generations, Kurita's efforts will not cease.",
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    }
  ];

  return (
    <section id="about" className="bg-white text-slate-900 overflow-hidden relative">
      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=1920" 
            alt="About Kurita" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-white/10"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center pt-20">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-300 mb-4 drop-shadow-md">Our Journey</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 drop-shadow-lg">Pioneering the Future<br/>of Water</h3>
          <p className="text-lg md:text-xl text-slate-100 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-medium">
            From the origins of life to the forefront of industrial innovation, Kurita's history is a testament to the enduring power and potential of water.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-24">
        
        <div className="relative">
          {/* Central Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-100 via-blue-200 to-blue-100 -translate-x-1/2"></div>

          <div className="space-y-24 lg:space-y-0">
            {stories.map((story, index) => (
              <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center lg:gap-24`}>
                
                {/* Timeline Marker (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-100 rounded-full items-center justify-center z-10 shadow-sm">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>

                {/* Content Side */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'} space-y-6 relative`}>
                  <div className={`inline-flex items-center gap-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                    <span className="text-5xl font-black text-blue-100/80 select-none">0{index + 1}</span>
                    <div className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-[0.2em]">
                      {story.subtitle}
                    </div>
                  </div>
                  
                  <h4 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-slate-900">
                    {story.title}
                  </h4>
                  <p className="text-slate-600 text-lg leading-relaxed font-light">
                    {story.content}
                  </p>
                </div>
                
                {/* Image Side */}
                <div className={`lg:w-1/2 w-full mt-12 lg:mt-0 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <div className="relative group">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-blue-900/5 aspect-[4/3] transform transition-transform duration-700 group-hover:-translate-y-2">
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?auto=format&fit=crop&q=80&w=1000";
                        }}
                      />
                      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    {/* Decorative Blob */}
                    <div className={`absolute -z-10 w-full h-full bg-blue-100/50 rounded-3xl blur-2xl top-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
