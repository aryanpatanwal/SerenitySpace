import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ onLogout, darkMode, onToggleDarkMode, isAuthenticated }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 20px',
      borderBottom: `1px solid ${darkMode ? '#27272a' : '#e0e0e0'}`,
      marginBottom: 24,
      background: darkMode ? 'linear-gradient(90deg, #23232a 0%, #18181b 100%)' : 'linear-gradient(90deg, #f8fafc 0%, #e0e7ef 100%)',
      borderRadius: 12,
      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
      position: 'relative'
    }}>
      <style>{`
        .nav-btn {
          transition: background 0.2s, color 0.2s, transform 0.1s;
        }
        .nav-btn:hover {
          background: #6366f1 !important;
          color: #fff !important;
        }
        .nav-btn:active {
          transform: scale(0.97);
        }
        .dark-toggle-navbar {
          background: ${darkMode ? '#18181b' : '#e0e7ef'};
          border: 1px solid ${darkMode ? '#27272a' : '#e0e0e0'};
          color: ${darkMode ? '#f3f4f6' : '#222'};
          border-radius: 999px;
          padding: 6px 18px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          margin-left: 18px;
          transition: background 0.3s, color 0.3s, border-color 0.3s;
        }
        .dark-toggle-navbar:hover {
          background: ${darkMode ? '#23232a' : '#c7d2fe'};
        }
        .nav-auth-btn {
          padding: 8px 22px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          border: none;
          margin-left: 8px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          text-decoration: none !important;
          background: ${darkMode ? '#23232a' : '#e0e7ef'};
          color: ${darkMode ? '#a5b4fc' : '#6366f1'};
          display: inline-block;
        }
        .nav-auth-btn:active {
          background: #6366f1 !important;
          color: #fff !important;
        }
        .nav-auth-btn:hover {
          background: ${darkMode ? '#373737' : '#c7d2fe'};
          color: #6366f1;
        }
        .nav-login-btn {
          background: ${darkMode ? '#6366f1' : '#6366f1'};
          color: #fff;
        }
        .nav-login-btn:hover {
          background: ${darkMode ? '#818cf8' : '#3730a3'};
        }
        .nav-signup-btn {
          background: ${darkMode ? '#23232a' : '#e0e7ef'};
          color: ${darkMode ? '#a5b4fc' : '#6366f1'};
        }
        .nav-signup-btn:hover {
          background: ${darkMode ? '#373737' : '#c7d2fe'};
        }
        .nav-logout-btn {
          transition: background 0.2s, color 0.2s, transform 0.1s;
        }
        .nav-logout-btn:hover {
          background: #6366f1 !important;
          color: #fff !important;
        }
        .nav-logout-btn:active {
          transform: scale(0.97);
        }
        .mobile-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          color: ${darkMode ? '#f3f4f6' : '#222'};
        }
        .mobile-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          left: auto;
          width: 200px;
          background: ${darkMode ? '#23232a' : '#fff'};
          border: 1px solid ${darkMode ? '#27272a' : '#e0e0e0'};
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          z-index: 1000;
          padding: 12px 0;
          margin-top: 8px;
        }
        .mobile-dropdown.open {
          display: block;
        }
        .mobile-dropdown-item {
          display: block;
          width: 100%;
          text-align: left;
          padding: 14px 24px;
          margin: 0;
          border-radius: 0;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          color: ${darkMode ? '#f3f4f6' : '#222'};
          font-weight: 600;
          transition: background 0.2s;
        }
        .mobile-dropdown-item:hover {
          background: ${darkMode ? '#373737' : '#f1f5f9'};
        }
        .mobile-dropdown-item.active {
          background: #6366f1;
          color: #fff;
        }
        .mobile-dropdown-item.active:hover {
          background: #5b21b6;
        }
        .mobile-dropdown-item:not(:last-child) {
          border-bottom: 1px solid ${darkMode ? '#373737' : '#e0e0e0'};
        }
        .nav-link {
          text-decoration: none !important;
        }
        @media (max-width: 768px) {
          .mobile-burger {
            display: block;
          }
          .desktop-nav {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-burger, .mobile-dropdown {
            display: none !important;
          }
        }
      `}</style>
      <Link
        to="/"
        className="nav-link"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: 'clamp(18px, 4vw, 22px)',
          fontWeight: 700,
          color: darkMode ? '#a5b4fc' : '#6366f1',
          marginRight: 'auto',
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: '1px',
          minWidth: 0
        }}
        title="Go to Home"
      >
        <svg width="clamp(24px, 5vw, 28px)" height="clamp(24px, 5vw, 28px)" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21c-4.5-2.5-7.5-7-7.5-11.5C4.5 5.5 7.5 3 12 3s7.5 2.5 7.5 6.5C19.5 14 16.5 18.5 12 21z" stroke={darkMode ? '#a5b4fc' : '#6366f1'} strokeWidth="2" fill={darkMode ? '#23232a' : '#fff'} />
          <path d="M12 17c-2.5-1.5-4.5-4.5-4.5-7.5C7.5 7.5 9.5 6 12 6s4.5 1.5 4.5 3.5C16.5 12.5 14.5 15.5 12 17z" stroke={darkMode ? '#a5b4fc' : '#6366f1'} strokeWidth="1.5" fill={darkMode ? '#18181b' : '#f1f5f9'} />
        </svg>
        <span style={{ display: window.innerWidth <= 480 ? 'none' : 'inline' }}>SerenitySpace</span>
      </Link>
      {/* Desktop Navigation */}
      <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 16, marginLeft: 'auto' }}>
        {isAuthenticated ? (
          <>
            <Link to="/journal" className="nav-btn nav-link">Journal</Link>
            <Link to="/chatbot" className="nav-btn nav-link">Chatbot</Link>
            <Link to="/profile" className="nav-btn nav-link">Profile</Link>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button className="dark-toggle-navbar" onClick={onToggleDarkMode}>{darkMode ? 'Light' : 'Dark'}</button>
              <button className="nav-logout-btn" onClick={onLogout} style={{ background: darkMode ? '#23232a' : '#f1f5f9', color: '#ef4444', fontWeight: 600, border: 'none', fontSize: 15, padding: 8, borderRadius: 8, cursor: 'pointer' }}>Logout</button>
            </div>
          </>
        ) : (
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button className="dark-toggle-navbar" onClick={onToggleDarkMode}>{darkMode ? 'Light' : 'Dark'}</button>
            <Link to="/login" className="nav-link nav-auth-btn">Login</Link>
            <Link to="/signup" className="nav-link nav-auth-btn">Sign Up</Link>
          </div>
        )}
      </div>
      {/* Mobile Burger Icon */}
      <button className="mobile-burger" onClick={toggleMobileMenu} aria-label="Open menu">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isMobileMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12"/>
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18"/>
          )}
        </svg>
      </button>
      {/* Mobile Dropdown Menu */}
      <div className={`mobile-dropdown${isMobileMenuOpen ? ' open' : ''}`}>
        {isAuthenticated ? (
          <>
            <Link
              to="/journal"
              className={`mobile-dropdown-item${current === 'journal' ? ' active' : ''}`}
            >
              Journal
            </Link>
            <Link
              to="/chatbot"
              className={`mobile-dropdown-item${current === 'chatbot' ? ' active' : ''}`}
            >
              Chatbot
            </Link>
            <Link
              to="/profile"
              className={`mobile-dropdown-item${current === 'profile' ? ' active' : ''}`}
            >
              Profile
            </Link>
            <div style={{ borderTop: `1px solid ${darkMode ? '#373737' : '#e0e0e0'}`, marginTop: 8, paddingTop: 8 }}>
              <button
                className="mobile-dropdown-item"
                onClick={() => onToggleDarkMode()}
                style={{ color: darkMode ? '#a5b4fc' : '#6366f1' }}
              >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
              <button
                className="mobile-dropdown-item"
                onClick={() => onLogout()}
                style={{ color: '#ef4444' }}
              >
                🚪 Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="mobile-dropdown-item"
              style={{ color: '#6366f1' }}
            >
              🔐 Login
            </Link>
            <Link
              to="/signup"
              className="mobile-dropdown-item"
              style={{ color: '#6366f1' }}
            >
              ✨ Sign Up
            </Link>
            <div style={{ borderTop: `1px solid ${darkMode ? '#373737' : '#e0e0e0'}`, marginTop: 8, paddingTop: 8 }}>
              <button
                className="mobile-dropdown-item"
                onClick={() => onToggleDarkMode()}
                style={{ color: darkMode ? '#a5b4fc' : '#6366f1' }}
              >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
} 