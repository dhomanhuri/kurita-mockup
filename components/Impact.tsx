
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SUSTAINABILITY_DATA } from '../constants';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-32 bg-[#000814] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[150px] rounded-full -mr-32"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-cyan-600/5 blur-[150px] rounded-full -ml-32"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-2/5">
            <div className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 border border-blue-500/20">
              Impact Analytics
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight section-heading-gradient-light">
              Global Water <br/><span className="text-blue-400">Savings Tracking</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed font-light">
              Leveraging digital transformation (DX) to monitor and optimize water usage across thousands of global sites. Our "Kurita Water Service" platform provides real-time data to maximize efficiency.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="fas fa-droplet text-blue-400 text-xl"></i>
                </div>
                <div className="text-blue-400 text-4xl font-black mb-2 tracking-tighter">310M+</div>
                <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest">m³ Water Saved</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="fas fa-cloud text-emerald-400 text-xl"></i>
                </div>
                <div className="text-emerald-400 text-4xl font-black mb-2 tracking-tighter">150K+</div>
                <div className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Tons CO2 Offset</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 lg:p-16 shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-[3rem] pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <div>
                <h4 className="text-2xl font-black mb-2 tracking-tight">Performance Projection</h4>
                <p className="text-gray-400 text-sm font-medium">Cumulative Water Savings (Million m³)</p>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Live Forecast</span>
              </div>
            </div>

            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={SUSTAINABILITY_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#475569" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis 
                    stroke="#475569" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12, fontWeight: 600 }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '15px' }}
                    itemStyle={{ color: '#3b82f6', fontWeight: 800 }}
                    cursor={{ stroke: '#3b82f6', strokeWidth: 2, strokeDasharray: '5 5' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3b82f6" 
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
