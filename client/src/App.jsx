import React, { useState } from 'react';
import AuthPage from './pages/AuthPage.jsx';
import JournalPage from './pages/JournalPage.jsx';
import ChatbotPage from './pages/ChatbotPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import Navbar from './components/Navbar.jsx';

function HomePage({ darkMode, onToggleDarkMode }) {
  const bg = darkMode ? '#18181b' : '#f8fafc';
  const cardBg = darkMode ? '#23232a' : '#fff';
  const text = darkMode ? '#f3f4f6' : '#222';
  const faded = darkMode ? '#a1a1aa' : '#888';
  const cards = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C7 3 3 7 3 12c0 2.5 1.5 4.5 3.5 6.5.5.5 1.5.5 2 0 .5-.5.5-1.5 0-2C7.5 15 7 13.5 7 12c0-2.8 2.2-5 5-5s5 2.2 5 5c0 1.5-.5 3-1.5 4.5-.5.5-.5 1.5 0 2 .5.5 1.5.5 2 0C19.5 16.5 21 14.5 21 12c0-5-4-9-9-9z" stroke="#6366f1" strokeWidth="1.5" fill="#a5b4fc"/>
        </svg>
      ),
      title: 'Reflect and Grow',
      desc: 'Journaling helps you understand your thoughts and emotions. Start your journey to self-discovery today. Writing regularly can help you process emotions, recognize patterns, and foster personal growth. SerenitySpace makes it easy and private.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21c-4.5-2.5-7.5-7-7.5-11.5C4.5 5.5 7.5 3 12 3s7.5 2.5 7.5 6.5C19.5 14 16.5 18.5 12 21z" stroke="#6366f1" strokeWidth="1.5" fill="#a5b4fc"/>
        </svg>
      ),
      title: 'Find Your Calm',
      desc: 'Our AI chatbot is here to support your mental wellness journey. Find peace of mind, anytime. Whether you need to vent, reflect, or seek advice, Tony is always ready to listen and help you find your calm.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="7" width="16" height="13" rx="2" stroke="#6366f1" strokeWidth="1.5" fill="#a5b4fc"/>
          <path d="M8 7V5a4 4 0 1 1 8 0v2" stroke="#6366f1" strokeWidth="1.5"/>
        </svg>
      ),
      title: 'Private & Secure',
      desc: 'Your thoughts are safe and confidential with us. SerenitySpace values your privacy. All your entries are encrypted and only accessible by you, ensuring a safe space for honest reflection.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="10" width="16" height="8" rx="4" stroke="#6366f1" strokeWidth="1.5" fill="#a5b4fc"/>
          <circle cx="8" cy="14" r="1.5" fill="#6366f1"/>
          <circle cx="16" cy="14" r="1.5" fill="#6366f1"/>
        </svg>
      ),
      title: '24/7 Support',
      desc: 'Tony, your AI companion, is always ready to listen and help you reflect. No matter the time of day, you have a supportive presence to talk to and guide you through your thoughts.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#6366f1" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="5" fill="#a5b4fc" stroke="#6366f1" strokeWidth="1.5"/>
        </svg>
      ),
      title: 'Mental Clarity',
      desc: 'Clear your mind and organize your thoughts in a safe, supportive space. SerenitySpace helps you declutter your mind, reduce stress, and focus on what matters most.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="12" width="3" height="7" rx="1.5" fill="#a5b4fc" stroke="#6366f1" strokeWidth="1.5"/>
          <rect x="8.5" y="9" width="3" height="10" rx="1.5" fill="#a5b4fc" stroke="#6366f1" strokeWidth="1.5"/>
          <rect x="14" y="6" width="3" height="13" rx="1.5" fill="#a5b4fc" stroke="#6366f1" strokeWidth="1.5"/>
        </svg>
      ),
      title: 'Track Your Progress',
      desc: 'Visualize your growth over time. SerenitySpace lets you look back on your journey, see patterns, and celebrate your progress toward better mental wellness.'
    },
  ];
  return (
    <div style={{ minHeight: '80vh', background: bg, color: text, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
      <div className="home-hero-row" style={{ display: 'flex', maxWidth: 1100, width: '100%', alignItems: 'center', justifyContent: 'center', gap: 48, padding: '32px 0', position: 'relative' }}>
        <div className="home-hero-left" style={{ flex: 1, minWidth: 320 }}>
          <div style={{ fontSize: 16, color: darkMode ? '#818cf8' : '#6366f1', fontWeight: 600, marginBottom: 12, animation: 'slideInLeft 0.7s cubic-bezier(.4,1.4,.6,1) both' }}>Welcome to</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18, animation: 'slideInLeft 0.7s cubic-bezier(.4,1.4,.6,1) 0.08s both' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21c-4.5-2.5-7.5-7-7.5-11.5C4.5 5.5 7.5 3 12 3s7.5 2.5 7.5 6.5C19.5 14 16.5 18.5 12 21z" stroke={darkMode ? '#a5b4fc' : '#6366f1'} strokeWidth="2" fill={darkMode ? '#23232a' : '#fff'} />
              <path d="M12 17c-2.5-1.5-4.5-4.5-4.5-7.5C7.5 7.5 9.5 6 12 6s4.5 1.5 4.5 3.5C16.5 12.5 14.5 15.5 12 17z" stroke={darkMode ? '#a5b4fc' : '#6366f1'} strokeWidth="1.5" fill={darkMode ? '#18181b' : '#f1f5f9'} />
            </svg>
            <span style={{ fontWeight: 700, color: darkMode ? '#a5b4fc' : '#6366f1', fontFamily: "'Poppins', sans-serif", fontSize: 32, letterSpacing: '1px' }}>SerenitySpace</span>
          </div>
          <div className="home-hero-title" style={{ fontSize: 38, fontWeight: 800, marginBottom: 18, lineHeight: 1.1, animation: 'slideInLeft 0.7s cubic-bezier(.4,1.4,.6,1) 0.16s both' }}>Where your thoughts<br />find peace.</div>
          <div className="home-hero-desc" style={{ fontSize: 18, color: faded, marginBottom: 32, maxWidth: 500, animation: 'slideInLeft 0.7s cubic-bezier(.4,1.4,.6,1) 0.24s both' }}>
            Serenity Space is a full-stack mental wellness platform that combines journaling and conversational AI. Built using React, Node.js, MongoDB, and OpenAI’s language model, it offers users a safe space to log their thoughts and engage with a supportive chatbot. Designed with simplicity, privacy, and mental clarity in mind.
          </div>
        </div>
        <div className="home-hero-right" style={{ flex: 1, minWidth: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 400, height: 400, borderRadius: 28, overflow: 'hidden', boxShadow: '0 4px 32px rgba(99,102,241,0.13)', maxWidth: '98vw' }}>
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Serenity" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
      {/* Card Section */}
      <style>{`
        .home-card {
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          will-change: transform, box-shadow;
          cursor: pointer;
          transform: scale(1);
        }
        .home-card:hover {
          box-shadow: 0 12px 36px rgba(99,102,241,0.22);
          transform: translateY(-12px) scale(1.1) rotate(-1.5deg);
          border-color: #6366f1 !important;
        }
        @media (max-width: 1100px) {
          .home-hero-row { flex-direction: column; gap: 32px !important; align-items: flex-start !important; }
          .home-hero-left, .home-hero-right { width: 100% !important; min-width: 0 !important; }
          .home-hero-left, .home-hero-right { align-items: center !important; justify-content: center !important; text-align: center !important; }
          .home-hero-title, .home-hero-desc { text-align: center !important; margin-left: auto !important; margin-right: auto !important; }
          .home-hero-left { padding: 0 18px !important; }
          .home-hero-right { padding: 0 18px !important; }
        }
        @media (max-width: 700px) {
          .home-hero-row { padding: 18px 0 !important; }
          .home-hero-left { padding: 0 8px !important; }
          .home-hero-right { padding: 0 8px !important; }
          .home-hero-title { font-size: 2rem !important; }
          .home-hero-desc { font-size: 1rem !important; }
          .home-card-grid { grid-template-columns: 1fr !important; grid-template-rows: none !important; gap: 24px !important; max-width: 98vw !important; }
          .home-card { max-width: 98vw !important; }
        }
      `}</style>
      <div style={{ width: '100%', background: bg, padding: '32px 0 48px 0', display: 'flex', justifyContent: 'center' }}>
        <div className="home-card-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(210px, 1fr))',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '36px 32px',
          maxWidth: 900,
          width: '100%',
          overflow: 'visible',
          padding: '0 12px'
        }}>
          {cards.map((card, i) => (
            <div key={i} className="home-card" style={{
              background: cardBg,
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(99,102,241,0.07)',
              border: `1.5px solid ${darkMode ? '#27272a' : '#e0e0e0'}`,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 260,
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingTop: 18,
              maxWidth: 270
            }}>
              {card.icon}
              <div style={{ padding: '16px 14px 14px 14px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: 17, color: darkMode ? '#a5b4fc' : '#6366f1', marginBottom: 7, textAlign: 'center' }}>{card.title}</div>
                <div style={{ color: faded, fontSize: 14, flex: 1, textAlign: 'center', lineHeight: 1.5 }}>{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Disclaimer Section */}
      <div style={{ width: '100%', background: darkMode ? '#1f2937' : '#fef3c7', borderTop: `1px solid ${darkMode ? '#374151' : '#f59e0b'}`, padding: '24px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{ 
            color: darkMode ? '#d1d5db' : '#92400e', 
            fontSize: 14, 
            lineHeight: 1.6,
            fontWeight: 500 
          }}>
            <strong>Important Notice:</strong> SerenitySpace provides AI-generated suggestions for general wellness support only. 
            These suggestions do not constitute medical advice, diagnosis, or treatment. 
            Always consult with qualified healthcare professionals for medical concerns or if you're experiencing a mental health crisis. 
            If you're in crisis, please contact emergency services or a mental health crisis hotline immediately.
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    return { username: 'User' };
  });
  const [page, setPage] = useState('journal');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [showAuth, setShowAuth] = useState(false);
  const [unauthPage, setUnauthPage] = useState('home');
  const [authMode, setAuthMode] = useState('login');

  const handleAuth = user => setUser(user);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setPage('journal');
    setShowAuth(false);
    setUnauthPage('home');
  };
  const handleNav = p => {
    if (!user && p === 'home') {
      setUnauthPage('home');
    } else if (!user) {
      setUnauthPage('auth');
    } else {
      if (p === 'home') {
        setUnauthPage('home');
        setPage('home'); // Also set the page state for authenticated users
      } else {
        setPage(p);
      }
    }
  };
  const toggleDarkMode = () => {
    setDarkMode(dm => {
      localStorage.setItem('darkMode', JSON.stringify(!dm));
      return !dm;
    });
  };

  const handleLogin = () => {
    setAuthMode('login');
    setShowAuth(true);
  };
  const handleSignup = () => {
    setAuthMode('signup');
    setShowAuth(true);
  };

  const appBg = darkMode ? '#18181b' : '#f8fafc';
  const appText = darkMode ? '#f3f4f6' : '#222';
  const footerBg = darkMode ? '#23232a' : '#f8fafc';
  const footerBorder = darkMode ? '#27272a' : '#e0e0e0';
  const logoColor = darkMode ? '#a5b4fc' : '#6366f1';

  return (
    <div style={{ minHeight: '100vh', background: appBg, color: appText, transition: 'background 0.3s, color 0.3s' }}>
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: none; }
        }
        html, body, #root {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          width: 100vw;
          min-width: 0;
          max-width: 100vw;
          overflow-x: hidden;
        }
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        @media (max-width: 768px) {
          .app-main {
            min-height: calc(100vh - 120px) !important;
          }
          .app-footer {
            padding: 0.75rem !important;
            flex-direction: column !important;
            gap: 12px !important;
            text-align: center !important;
          }
          .footer-content {
            order: 2 !important;
            font-size: 0.8rem !important;
          }
          .footer-social {
            order: 1 !important;
          }
        }
        @media (max-width: 480px) {
          .app-main {
            min-height: calc(100vh - 100px) !important;
          }
          .app-footer {
            padding: 0.5rem !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
      <Navbar
        onNav={user ? setPage : setUnauthPage}
        onLogout={handleLogout}
        current={user ? page : unauthPage}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        isAuthenticated={!!user}
        onLogin={() => { setUnauthPage('auth'); setAuthMode('login'); }}
        onSignup={() => { setUnauthPage('auth'); setAuthMode('signup'); }}
        authMode={authMode}
      />
      <main className="app-main" style={{ minHeight: '80vh' }}>
        {!user ? (
          unauthPage === 'home' ?
            <HomePage darkMode={darkMode} onToggleDarkMode={toggleDarkMode} /> :
            <AuthPage onAuth={handleAuth} mode={authMode} darkMode={darkMode} />
        ) : (
          <>
            {page === 'home' && <HomePage darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />}
            {page === 'journal' && <JournalPage user={user} onLogout={handleLogout} darkMode={darkMode} />}
            {page === 'chatbot' && <ChatbotPage darkMode={darkMode} />}
            {page === 'profile' && <ProfilePage darkMode={darkMode} onLogout={handleLogout} />}
          </>
        )}
      </main>
      {showAuth && (
        <AuthPage
          onAuth={user => {
            setUser(user);
            setShowAuth(false);
            setPage('journal');
          }}
          darkMode={darkMode}
          defaultMode={authMode}
        />
      )}
      <footer className="app-footer" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        marginTop: '2rem',
        color: darkMode ? '#a1a1aa' : '#888',
        fontSize: '0.9rem',
        borderTop: `1px solid ${footerBorder}`,
        background: footerBg,
        flexWrap: 'wrap',
        transition: 'background 0.3s, color 0.3s, border-color 0.3s'
      }}>
        <style>{`
          .footer-social-link {
            display: inline-flex;
            align-items: center;
            color: ${logoColor};
            transition: color 0.2s;
          }
          .footer-social-link:hover {
            color: ${darkMode ? '#818cf8' : '#3730a3'};
          }
          .footer-social-link svg {
            fill: currentColor;
            stroke: none;
          }
          .dark-toggle {
            background: ${darkMode ? '#18181b' : '#e0e7ef'};
            border: 1px solid ${footerBorder};
            color: ${darkMode ? '#f3f4f6' : '#222'};
            border-radius: 999px;
            padding: 6px 18px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            margin-left: 18px;
            transition: background 0.3s, color 0.3s, border-color 0.3s;
          }
          .dark-toggle:hover {
            background: ${darkMode ? '#23232a' : '#c7d2fe'};
          }
        `}</style>
        <div className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21c-4.5-2.5-7.5-7-7.5-11.5C4.5 5.5 7.5 3 12 3s7.5 2.5 7.5 6.5C19.5 14 16.5 18.5 12 21z" stroke={logoColor} strokeWidth="2" fill={darkMode ? '#23232a' : '#fff'} />
            <path d="M12 17c-2.5-1.5-4.5-4.5-4.5-7.5C7.5 7.5 9.5 6 12 6s4.5 1.5 4.5 3.5C16.5 12.5 14.5 15.5 12 17z" stroke={logoColor} strokeWidth="1.5" fill={darkMode ? '#18181b' : '#f1f5f9'} />
          </svg>
          <span style={{ fontWeight: 700, color: logoColor, fontFamily: "'Poppins', sans-serif", fontSize: 18, letterSpacing: '1px' }}>SerenitySpace</span>
        </div>
        <div className="footer-content" style={{ textAlign: 'center', flex: 1 }}>
          © {new Date().getFullYear()} SerenitySpace.Inc. All rights reserved.
        </div>
        <div className="footer-social" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" className="footer-social-link">
            <svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter" className="footer-social-link">
            <svg width="22" height="22" viewBox="0 0 512 512"><path d="M459.4 151.7c.32 4.54.32 9.1.32 13.66 0 138.72-105.58 298.56-298.56 298.56A296.32 296.32 0 0 1 0 408.09a209.1 209.1 0 0 0 24.42 1.28 209.09 209.09 0 0 0 129.29-44.56 104.52 104.52 0 0 1-97.52-72.54 132.07 132.07 0 0 0 19.8 1.6 110.2 110.2 0 0 0 27.45-3.6A104.48 104.48 0 0 1 21.8 188.1v-1.28a104.68 104.68 0 0 0 47.18 13.1A104.52 104.52 0 0 1 35.7 82.15a297.32 297.32 0 0 0 215.5 109.44 117.6 117.6 0 0 1-2.56-23.87A104.52 104.52 0 0 1 391.86 63.4a204.13 204.13 0 0 0 66.36-25.34 104.88 104.88 0 0 1-45.92 57.6A209.1 209.1 0 0 0 512 97.2a223.34 223.34 0 0 1-52.6 54.5Z"/></svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" className="footer-social-link">
            <svg width="22" height="22" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91V127.91c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121 44.38-121 124.72v70.62H22.89V288h81.47v224h100.2V288z"/></svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

