import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading">
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <div style={{ marginBottom: '1rem' }}>Loading...</div>
          <div>Verifying authentication...</div>
        </div>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;