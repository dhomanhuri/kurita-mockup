
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import Solutions from '../components/Solutions';
import Sustainability from '../components/Sustainability';
import Impact from '../components/Impact';
import AIExpert from '../components/AIExpert';
import NewsSection from '../components/NewsSection';
import IndonesiaMarketSection from '../components/IndonesiaMarketSection';
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/Footer';

const IndonesiaHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Solutions />
        <Sustainability />
        <IndonesiaMarketSection />
        <NewsSection />
        <Impact />
        <AIExpert />
      </main>
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default IndonesiaHome;
