
import React, { useEffect, useState } from 'react';
import Earth3D from './Earth3D';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-[110vh] flex items-center overflow-hidden bg-blue-900 pt-20">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40 scale-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-blue-liquid-surface-42721-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* Main Content (Left) */}
          <div className="lg:w-[55%] text-white">
            <div className="inline-flex items-center space-x-3 bg-blue-500/10 backdrop-blur-2xl border border-blue-400/20 px-5 py-2.5 rounded-full mb-10 fade-in shadow-2xl shadow-blue-500/10" style={{ animationDelay: '0.1s' }}>
              <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[11px] font-black tracking-[0.25em] uppercase text-cyan-100/90">Pioneering Water Solutions</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl xl:text-[110px] font-black leading-[0.85] mb-10 tracking-tighter fade-in" style={{ animationDelay: '0.3s' }}>
              RESTORING <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-600">THE BLUE <br/>PLANET</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100/70 mb-12 leading-relaxed max-w-2xl font-light fade-in" style={{ animationDelay: '0.5s' }}>
              Through advanced water-saving technologies and sustainable cycles, we're committed to preserving Earth's most vital resource for generations to come.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 fade-in" style={{ animationDelay: '0.7s' }}>
              <button className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-lg transition-all transform hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] flex items-center group">
                Explore Solutions
                <i className="fas fa-arrow-right ml-4 group-hover:translate-x-2 transition-transform"></i>
              </button>
              <button 
                onClick={() => setShowVideo(true)}
                className="group flex items-center space-x-4 text-white/80 hover:text-white transition-colors"
              >
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <i className="fas fa-play text-sm ml-1"></i>
                </div>
                <span className="font-bold tracking-wider">OUR STORY</span>
              </button>
            </div>
          </div>

          {/* 3D Earth Animation (Right) */}
          <div className="lg:w-[45%] w-full flex justify-center items-center relative fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="absolute inset-0 bg-blue-500/20 blur-[150px] rounded-full animate-pulse"></div>
            <div className="w-full aspect-square max-w-[600px] relative">
              <Earth3D />
              
              {/* Floating Data Card */}
              <div className="absolute top-1/4 -right-4 lg:-right-8 glass-card p-6 rounded-3xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] animate-float backdrop-blur-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-blue-900/60">Global Impact</span>
                </div>
                <div className="text-4xl font-black text-blue-900 mb-1">310M+</div>
                <div className="text-[11px] font-bold text-blue-900/40 uppercase tracking-tighter">m³ Water Restored</div>
              </div>

              {/* Stats Badge */}
              <div className="absolute bottom-1/4 -left-4 lg:-left-12 bg-blue-600/90 backdrop-blur-xl p-5 rounded-3xl border border-blue-400/30 shadow-2xl rotate-[-6deg]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <i className="fas fa-leaf text-cyan-300"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">150K</div>
                    <div className="text-[10px] font-bold text-blue-100/60 uppercase">Tons CO2 Offset</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-900 to-transparent z-10"></div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-blue-950/90 backdrop-blur-xl p-4 md:p-10 animate-in fade-in duration-300">
          <div className="absolute inset-0" onClick={() => setShowVideo(false)}></div>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 scale-in animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/10"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            <iframe 
              src="https://www.youtube.com/embed/epDiwxeV518?autoplay=1" 
              title="Kurita Group Profile"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
