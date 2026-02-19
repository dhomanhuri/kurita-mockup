import React from 'react';
import Navbar from '../components/Navbar';
import Earth3D from '../components/Earth3D';

const JumbotronPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-900 selection:text-white font-sans">
      <Navbar />
      
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-50 skew-x-12 translate-x-32 z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-50/50 rounded-tr-[100px] z-0"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-600 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-slate-900 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            
            {/* Left Content */}
            <div className="lg:w-[55%] lg:pr-12 relative z-20">
              <div className="inline-block px-4 py-2 bg-slate-100 rounded-lg mb-8 border-l-4 border-green-500">
                <span className="text-sm font-bold text-slate-600 tracking-wide uppercase">Sustainable Technology</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8">
                Purifying Water <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-green-500">
                  Enriching Life
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                We combine advanced water treatment technologies with digital innovation to create a sustainable future where nature and industry coexist in harmony.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/30 flex items-center group">
                  Our Solutions
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
                <button className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-xl font-bold hover:border-green-500 hover:text-green-600 transition-all flex items-center">
                  <i className="fas fa-play-circle mr-3 text-xl"></i>
                  Watch Video
                </button>
              </div>

              <div className="mt-16 flex items-center gap-8 border-t border-slate-200 pt-8">
                <div>
                  <h4 className="text-3xl font-black text-blue-900">70+</h4>
                  <p className="text-sm text-slate-500 font-medium">Years Experience</p>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <h4 className="text-3xl font-black text-green-600">100%</h4>
                  <p className="text-sm text-slate-500 font-medium">Eco-Friendly</p>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <h4 className="text-3xl font-black text-slate-900">Global</h4>
                  <p className="text-sm text-slate-500 font-medium">Network</p>
                </div>
              </div>
            </div>

            {/* Right Visual - 3D Earth Integration */}
            <div className="lg:w-[45%] mt-16 lg:mt-0 relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-green-100 blur-[100px] rounded-full opacity-50"></div>
              
              <div className="w-full aspect-square max-w-[600px] relative z-10">
                <Earth3D />
                
                {/* Glassmorphic Data Card 1 */}
                <div className="absolute top-20 -right-4 lg:-right-8 bg-white/80 p-5 rounded-2xl border border-white/50 shadow-[0_20px_50px_-10px_rgba(0,71,171,0.15)] animate-float backdrop-blur-md max-w-[220px]" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-[#0047AB] shadow-inner">
                      <i className="fas fa-water text-lg"></i>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Water Restored</div>
                      <div className="text-xs font-medium text-blue-500">Global Impact</div>
                    </div>
                  </div>
                  <div className="text-4xl font-black text-[#0B1C33] mb-1 tracking-tight">310M+</div>
                  <div className="text-xs font-bold text-[#64748B] flex items-center gap-1">
                    Cubic Meters / Year
                    <span className="text-green-500 bg-green-50 px-1.5 py-0.5 rounded text-[10px]">+12%</span>
                  </div>
                </div>

                {/* Glassmorphic Data Card 2 */}
                <div className="absolute bottom-20 -left-4 lg:-left-12 bg-white/80 p-5 rounded-2xl border border-white/50 shadow-[0_20px_50px_-10px_rgba(0,71,171,0.15)] animate-float backdrop-blur-md max-w-[200px]" style={{ animationDelay: '2.5s' }}>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center text-green-600 shadow-inner">
                      <i className="fas fa-leaf text-lg"></i>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">CO₂ Reduced</div>
                      <div className="text-xs font-medium text-green-500">Sustainability</div>
                    </div>
                  </div>
                  <div className="text-3xl font-black text-[#0B1C33] mb-1 tracking-tight">50K+</div>
                  <div className="text-xs font-bold text-[#64748B]">Tons / Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JumbotronPage;
