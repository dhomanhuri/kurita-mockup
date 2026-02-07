
import React from 'react';
import { LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000814] text-white pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-10">
              <img 
                src={LOGO_URL} 
                alt="Kurita Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 leading-relaxed mb-10 font-medium">
              A leading global provider of water treatment chemicals, facilities, and maintenance services, dedicated to creating shared value for society and the planet.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'fa-linkedin-in', link: '#' },
                { icon: 'fa-twitter', link: '#' },
                { icon: 'fa-youtube', link: '#' },
                { icon: 'fa-instagram', link: '#' }
              ].map((social, i) => (
                <a key={i} href={social.link} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group">
                  <i className={`fab ${social.icon} text-lg group-hover:scale-110`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-sm font-black uppercase tracking-[0.2em] mb-10 text-white">Company</h5>
            <ul className="space-y-5 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-4 h-px bg-blue-400 mr-0 group-hover:mr-3 transition-all"></span>
                About Us
              </a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-4 h-px bg-blue-400 mr-0 group-hover:mr-3 transition-all"></span>
                Our History
              </a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-4 h-px bg-blue-400 mr-0 group-hover:mr-3 transition-all"></span>
                Global Network
              </a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-4 h-px bg-blue-400 mr-0 group-hover:mr-3 transition-all"></span>
                Careers
              </a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-black uppercase tracking-[0.2em] mb-10 text-white">Sustainability</h5>
            <ul className="space-y-5 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-4 h-px bg-blue-400 mr-0 group-hover:mr-3 transition-all"></span>
                CSV Philosophy
              </a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-4 h-px bg-blue-400 mr-0 group-hover:mr-3 transition-all"></span>
                ESG Reporting
              </a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-4 h-px bg-blue-400 mr-0 group-hover:mr-3 transition-all"></span>
                Water Savings
              </a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-4 h-px bg-blue-400 mr-0 group-hover:mr-3 transition-all"></span>
                Green Innovation
              </a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-black uppercase tracking-[0.2em] mb-10 text-white">Contact Us</h5>
            <ul className="space-y-6 text-slate-400 font-medium">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="text-sm leading-relaxed">Nakano Central Park East, 4-10-1 Nakano, Nakano-ku, Tokyo, Japan</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span className="text-sm">+81-3-6743-5000</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-400">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="text-sm">info@kurita-water.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[11px] font-bold uppercase tracking-widest text-slate-500">
          <p>© 2026 Kurita Water Industries Ltd. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
