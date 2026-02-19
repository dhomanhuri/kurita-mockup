
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <AboutSection />
      </main>
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
