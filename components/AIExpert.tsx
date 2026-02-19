
import React, { useState, useRef, useEffect } from 'react';
import { askWaterExpert } from '../services/geminiService';
import { Message } from '../types';

const AIExpert: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm the Kurita AI Expert. How can I assist you with your water treatment or sustainability questions today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await askWaterExpert(input);
    const aiMsg: Message = { role: 'model', text: responseText };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <section id="ai-expert" className="py-32 bg-[#f8fafc] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6">
              Intelligence Assistant
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight section-heading-gradient">
              Kurita <span className="text-blue-600">AI Expert</span>
            </h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Experience the power of Kurita's expertise. Ask about ultrapure water, chemical engineering, or our global sustainability initiatives.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 flex flex-col md:flex-row h-[700px]">
            {/* Sidebar (Desktop) */}
            <div className="hidden md:flex flex-col w-72 bg-slate-50 border-r border-slate-100 p-8">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-8">Capabilities</h4>
              <div className="space-y-6">
                {[
                  { icon: 'fa-vial', label: 'Water Analysis' },
                  { icon: 'fa-leaf', label: 'ESG Reporting' },
                  { icon: 'fa-microchip', label: 'DX Solutions' },
                  { icon: 'fa-globe', label: 'Global Compliance' }
                ].map((cap, i) => (
                  <div key={i} className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <i className={`fas ${cap.icon}`}></i>
                    </div>
                    <span className="font-bold text-slate-600 text-sm">{cap.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto p-6 bg-blue-600 rounded-[2rem] text-white">
                <p className="text-xs font-bold leading-relaxed opacity-90">
                  Powered by PT. Kurita Indonesia
                </p>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Header */}
              <div className="bg-white px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                      <i className="fas fa-robot text-xl"></i>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 tracking-tight">AI Advisor</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Always Active</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-10 h-10 rounded-full hover:bg-slate-50 text-slate-400 flex items-center justify-center transition-colors">
                    <i className="fas fa-search"></i>
                  </button>
                  <button className="w-10 h-10 rounded-full hover:bg-slate-50 text-slate-400 flex items-center justify-center transition-colors">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/30">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-5 rounded-[2rem] shadow-sm ${
                      m.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none shadow-blue-200' 
                        : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                    }`}>
                      <p className="whitespace-pre-wrap leading-relaxed font-medium text-[15px]">{m.text}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white p-5 rounded-[2rem] border border-slate-100 rounded-tl-none flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-150"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-300"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-8 bg-white border-t border-slate-100">
                <div className="flex items-center bg-slate-100 rounded-2xl px-6 py-3 focus-within:bg-slate-200 transition-colors group">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 font-medium placeholder:text-slate-400"
                  />
                  <div className="flex items-center space-x-3">
                    <button className="text-slate-400 hover:text-slate-600">
                      <i className="fas fa-paperclip"></i>
                    </button>
                    <button 
                      onClick={handleSend}
                      disabled={isLoading}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        input.trim() ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-300 text-slate-500'
                      }`}
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIExpert;
