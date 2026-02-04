import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <div>Loading user information...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="dashboard">
          <div className="dashboard-header">
            <h1>Welcome, {user.username}!</h1>
          </div>
          
          <div className="dashboard-content">
            <div className="user-info">
              <h3>📋 User Profile</h3>
              <div className="user-info-grid">
                <div className="user-info-item">
                  <strong>Username</strong>
                  <span>{user.username}</span>
                </div>
                <div className="user-info-item">
                  <strong>Email</strong>
                  <span>{user.email}</span>
                </div>
                <div className="user-info-item">
                  <strong>Member Since</strong>
                  <span>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</span>
                </div>
                <div className="user-info-item">
                  <strong>Last Login</strong>
                  <span>{user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'First time login'}</span>
                </div>
              </div>
            </div>
            
            <div className="dashboard-features">
              <h3>🚀 System Features</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">🔐</span>
                  <span>Secure Authentication</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🛡️</span>
                  <span>Protected Routes</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">👤</span>
                  <span>User Profile Management</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎫</span>
                  <span>JWT Token Management</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <span>Form Validation</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📱</span>
                  <span>Responsive Design</span>
                </div>
              </div>
            </div>
            
            <div className="system-status">
              <h4>🌟 System Status</h4>
              <div className="status-grid">
                <div className="status-item">
                  <span className="status-icon">✅</span>
                  <span className="status-text">Authentication Service: Active</span>
                </div>
                <div className="status-item">
                  <span className="status-icon">✅</span>
                  <span className="status-text">Session Management: Active</span>
                </div>
                <div className="status-item">
                  <span className="status-icon">✅</span>
                  <span className="status-text">Security Features: Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;