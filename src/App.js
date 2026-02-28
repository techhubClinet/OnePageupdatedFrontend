import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

const isAdminAuthed = () => localStorage.getItem('sd_admin_authed') === 'true';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page only — 3 sections: Book, Pamela Shore, Community */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Navigate to="/" state={{ scrollTo: 'pamela' }} replace />} />
        <Route path="/connect" element={<Navigate to="/" state={{ scrollTo: 'community' }} replace />} />
        <Route path="/booking" element={<Navigate to="/" state={{ scrollTo: 'booking' }} replace />} />
        
        {/* Admin Routes */}
        <Route
          path="/admin"
          element={isAdminAuthed() ? <AdminDashboard /> : <Navigate to="/admin/login" replace />}
        />
        <Route
          path="/admin/login"
          element={isAdminAuthed() ? <Navigate to="/admin" replace /> : <AdminLogin />}
        />
        
        {/* Redirect all other routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
