
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS, LOGO_URL } from '../constants';
import { NavItem } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentCountry = location.pathname.split('/')[1] || 'id';

  const countries = [
    { code: 'id', label: 'Indonesia' },
    { code: 'sg', label: 'Singapore' },
    { code: 'my', label: 'Malaysia' },
    { code: 'th', label: 'Thailand' },
    { code: 'vn', label: 'Vietnam' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);

    // Specific logic for pages
    if (id === 'about') {
      navigate(`/${currentCountry}/about`);
      return;
    }

    if (id === 'home') {
      navigate(`/${currentCountry}/`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // For other sections, if we're not on the home page, navigate to home first
    if (location.pathname !== `/${currentCountry}/` && location.pathname !== `/${currentCountry}`) {
      navigate(`/${currentCountry}/`);
      // Use a timeout to allow the home page to load before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const NavButton: React.FC<{ item: NavItem; depth?: number }> = ({ item, depth = 0 }) => {
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div className={`relative group/nav-level-${depth}`}>
        <button
          onClick={() => !hasChildren && handleNavClick(item.id)}
          className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${
            depth > 0 ? 'w-full text-left justify-between hover:bg-blue-50 text-gray-700 rounded-lg' : 
            `rounded-full ${isScrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-500/10' : 'text-[#0B1C33]/90 hover:text-[#0047AB] hover:bg-[#0047AB]/5'}`
          }`}
        >
          <span>{item.label}</span>
          {hasChildren && (
            <i className={`fas fa-chevron-right text-[10px] transition-transform duration-300 ${depth === 0 ? 'rotate-90 group-hover/nav-level-${depth}:rotate-[270deg]' : 'group-hover/nav-level-${depth}:translate-x-1'}`}></i>
          )}
        </button>

        {hasChildren && (
          <div className={`absolute z-50 opacity-0 invisible group-hover/nav-level-${depth}:opacity-100 group-hover/nav-level-${depth}:visible transition-all duration-300 pt-2 min-w-[220px] ${
            depth > 0 ? 'left-full top-0 -mt-2 pl-1' : 'left-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 py-3">
              {item.children?.map((child) => (
                <NavButton key={child.id} item={child} depth={depth + 1} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5 text-slate-800'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick('home')}>
          <img 
            src={LOGO_URL} 
            alt="Kurita Logo" 
            className="h-8 md:h-10 w-auto transition-all duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <NavButton key={item.id} item={item} />
          ))}
          
          {/* Country Selector */}
          <div className="relative group/country ml-6 pl-6 border-l border-slate-200/50">
            <button className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-[#0B1C33]/90 hover:text-[#0047AB] hover:bg-[#0047AB]/5'}`}>
              <i className="fas fa-globe"></i>
              <span>{currentCountry.toUpperCase()}</span>
              <i className="fas fa-chevron-down text-[10px]"></i>
            </button>
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover/country:opacity-100 group-hover/country:visible transition-all duration-300 min-w-[150px]">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                {countries.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => {
                      const currentPath = location.pathname.split('/').slice(2).join('/');
                      navigate(`/${c.code}/${currentPath}`);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm font-medium hover:bg-blue-50 transition-colors ${currentCountry === c.code ? 'text-blue-600 font-bold' : 'text-slate-600'}`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button className={`ml-4 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${isScrolled ? 'bg-[#0047AB] text-white hover:bg-[#003380] shadow-md hover:shadow-lg' : 'bg-[#0047AB] text-white hover:bg-[#003380] shadow-lg shadow-blue-500/20'}`}>
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-[#0B1C33] hover:bg-[#0047AB]/5'}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl text-gray-900 p-8 absolute top-full left-0 w-full shadow-2xl border-t border-gray-100 overflow-y-auto max-h-[80vh]">
          <div className="flex flex-col space-y-4">
            {/* Country Selector Mobile */}
            <div className="flex flex-wrap gap-2 pb-4 border-b border-gray-100">
              {countries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => {
                    const currentPath = location.pathname.split('/').slice(2).join('/');
                    navigate(`/${c.code}/${currentPath}`);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${currentCountry === c.code ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  {c.code.toUpperCase()}
                </button>
              ))}
            </div>

            {NAV_ITEMS.map((item) => (
              <div key={item.id} className="flex flex-col space-y-2">
                <button
                  onClick={() => !item.children && handleNavClick(item.id)}
                  className="text-left font-bold text-xl tracking-tight text-gray-900 hover:text-blue-600 transition-colors flex justify-between items-center"
                >
                  {item.label}
                </button>
                {item.children && (
                  <div className="pl-4 flex flex-col space-y-2 border-l-2 border-blue-100 ml-1">
                    {item.children.map((child) => (
                      <div key={child.id} className="flex flex-col space-y-1">
                        <button
                          onClick={() => !child.children && handleNavClick(child.id)}
                          className="text-left font-semibold text-gray-600 hover:text-blue-600 text-sm"
                        >
                          {child.label}
                        </button>
                        {child.children && (
                          <div className="pl-4 flex flex-col space-y-1 border-l border-blue-50 ml-1">
                            {child.children.map((subChild) => (
                              <button
                                key={subChild.id}
                                onClick={() => handleNavClick(subChild.id)}
                                className="text-left text-gray-500 hover:text-blue-600 text-xs py-1"
                              >
                                {subChild.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <hr className="border-gray-100" />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200">
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
