import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';

export default function RoutesIndex({ user, logout, onLogin }) {
  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={onLogin} />} />
      <Route path="/" element={<Home user={user} logout={logout} />} />
      <Route
        path="/profile"
        element={user ? <Profile user={user} /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
