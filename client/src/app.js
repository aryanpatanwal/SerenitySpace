import React, { useState } from 'react';
import AuthPage from './pages/AuthPage';
import JournalPage from './pages/JournalPage';
import ChatbotPage from './pages/ChatbotPage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    return { username: 'User' };
  });
  const [page, setPage] = useState('journal');

  const handleAuth = user => setUser(user);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setPage('journal');
  };
  const handleNav = p => setPage(p);

  if (!user) return <AuthPage onAuth={handleAuth} />;

  return (
    <div>
      <Navbar onNav={handleNav} onLogout={handleLogout} current={page} />
      {page === 'journal' && <JournalPage user={user} onLogout={handleLogout} />}
      {page === 'chatbot' && <ChatbotPage />}
      {page === 'profile' && <ProfilePage />}
    </div>
  );
}

export default App;

