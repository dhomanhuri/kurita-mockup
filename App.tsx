
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IndonesiaHome from './pages/IndonesiaHome';
import CountryHome from './pages/CountryHome';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to /id/ */}
        <Route path="/" element={<Navigate to="/id/" replace />} />
        
        {/* Indonesia Market */}
        <Route path="/id/*" element={<IndonesiaHome />} />
        
        {/* Other Countries */}
        <Route path="/sg/*" element={<CountryHome />} />
        <Route path="/my/*" element={<CountryHome />} />
        <Route path="/th/*" element={<CountryHome />} />
        <Route path="/vn/*" element={<CountryHome />} />

        {/* Catch all for other country codes if needed, or redirect back to id */}
        <Route path="/:countryCode/*" element={<CountryHome />} />
      </Routes>
    </Router>
  );
}

export default App;
