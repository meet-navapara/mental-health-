import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import TherapistProfileForm from './authentication/therapistProfile/TherapistProfileForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/therapist-profile" element={<TherapistProfileForm />} />
      </Routes>
    </Router>
  );
}

export default App;
