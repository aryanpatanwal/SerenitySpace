import React from 'react';

export default function Navbar({ onNav, onLogout, current }) {
  return (
    <nav style={{ display: 'flex', gap: 16, padding: 16, borderBottom: '1px solid #ccc', marginBottom: 24 }}>
      <button onClick={() => onNav('journal')} style={{ fontWeight: current === 'journal' ? 'bold' : 'normal' }}>Journal</button>
      <button onClick={() => onNav('chatbot')} style={{ fontWeight: current === 'chatbot' ? 'bold' : 'normal' }}>Chatbot</button>
      <button onClick={() => onNav('profile')} style={{ fontWeight: current === 'profile' ? 'bold' : 'normal' }}>Profile</button>
      <button onClick={onLogout} style={{ marginLeft: 'auto' }}>Logout</button>
    </nav>
  );
} 