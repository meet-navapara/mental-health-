import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import TherapistProfileForm from "./authentication/therapistProfile/TherapistProfileForm";
import DashboardLayout from "./components/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import DashboardProfile from "./pages/DashboardProfile";
import DashboardAvailability from "./pages/DashboardAvailability";
import DashboardPayment from "./pages/DashboardPayment";
import DashboardSessions from "./pages/DashboardSessions";
import DashboardMessages from "./pages/DashboardMessages";
import DashboardSupport from "./pages/DashboardSupport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/therapist-profile" element={<TherapistProfileForm />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="availability" element={<DashboardAvailability />} />
          <Route path="sessions" element={<DashboardSessions />} />
          <Route path="messages" element={<DashboardMessages />} />
          <Route path="payment" element={<DashboardPayment />} />
          <Route path="support" element={<DashboardSupport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
