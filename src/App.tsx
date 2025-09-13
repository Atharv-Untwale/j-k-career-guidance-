import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AptitudeQuiz from './pages/AptitudeQuiz';
import CareerPathways from './pages/CareerPathways';
import CollegeDirectory from './pages/CollegeDirectory';
import Timeline from './pages/Timeline';
import Dashboard from './pages/Dashboard';

function App() {
  const [userProfile, setUserProfile] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<AptitudeQuiz setUserProfile={setUserProfile} />} />
          <Route path="/careers" element={<CareerPathways />} />
          <Route path="/colleges" element={<CollegeDirectory />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/dashboard" element={<Dashboard userProfile={userProfile} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;