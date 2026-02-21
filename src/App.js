import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ConnectPage from './pages/ConnectPage';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

const isAdminAuthed = () => localStorage.getItem('sd_admin_authed') === 'true';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        
        {/* Backward compatibility - redirect booking to connect */}
        <Route path="/booking" element={<Navigate to="/connect" replace />} />
        
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
