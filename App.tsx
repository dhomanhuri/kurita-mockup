
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IndonesiaHome from './pages/IndonesiaHome';
import CountryHome from './pages/CountryHome';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import JumbotronPage from './pages/JumbotronPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Route */}
        <Route path="/admin" element={<AdminPage />} />
        
        {/* Jumbotron Demo Route */}
        <Route path="/jumbotron" element={<JumbotronPage />} />

        {/* Redirect root to /id/ */}
        <Route path="/" element={<Navigate to="/id/" replace />} />
        
        {/* About pages for all countries */}
        <Route path="/:countryCode/about" element={<AboutPage />} />
        
        {/* Home pages for all countries */}
        <Route path="/id" element={<IndonesiaHome />} />
        <Route path="/id/" element={<IndonesiaHome />} />
        
        <Route path="/:countryCode" element={<CountryHome />} />
        <Route path="/:countryCode/" element={<CountryHome />} />

        {/* Catch all redirect to id */}
        <Route path="*" element={<Navigate to="/id/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
