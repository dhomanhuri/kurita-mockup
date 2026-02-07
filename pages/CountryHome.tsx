
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import Solutions from '../components/Solutions';
import Sustainability from '../components/Sustainability';
import Impact from '../components/Impact';
import AIExpert from '../components/AIExpert';
import NewsSection from '../components/NewsSection';
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const CountryHome: React.FC = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const countryName = {
    sg: 'Singapore',
    my: 'Malaysia',
    th: 'Thailand',
    vn: 'Vietnam',
  }[countryCode?.toLowerCase() || ''] || countryCode?.toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <div className="py-20 bg-blue-900 text-white text-center">
          <h2 className="text-4xl font-bold">Welcome to Kurita {countryName}</h2>
          <p className="mt-4 text-xl text-blue-200">Providing water treatment solutions for the {countryName} market.</p>
        </div>
        <TrustSection />
        <Solutions />
        <Sustainability />
        <NewsSection />
        <Impact />
        <AIExpert />
      </main>
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default CountryHome;
