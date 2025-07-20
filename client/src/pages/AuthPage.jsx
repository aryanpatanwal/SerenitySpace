import React, { useState } from 'react';
import { API_ENDPOINTS } from '../config/api';

export default function AuthPage({ onAuth, darkMode }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const endpoint = isLogin ? '/login' : '/register';
      const body = isLogin ? { email: form.email, password: form.password } : form;
      const res = await fetch(API_ENDPOINTS.AUTH + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      if (isLogin) {
        localStorage.setItem('token', data.token);
        onAuth(data.user);
      } else {
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const bg = darkMode ? '#18181b' : 'linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)';
  const cardBg = darkMode ? '#23232a' : '#fff';
  const border = darkMode ? '#27272a' : '#e0e0e0';
  const text = darkMode ? '#f3f4f6' : '#222';
  const faded = darkMode ? '#a1a1aa' : '#888';
  const inputBg = darkMode ? '#18181b' : '#fff';
  const inputBorder = darkMode ? '#27272a' : '#d1d5db';
  const inputText = darkMode ? '#f3f4f6' : '#222';
  const btnBg = darkMode ? '#6366f1' : '#6366f1';
  const btnText = '#fff';
  const btnBgAlt = darkMode ? '#23232a' : '#f1f5f9';
  const btnTextAlt = darkMode ? '#a5b4fc' : '#6366f1';

  return (
    <div style={{ minHeight: '100vh', background: bg, padding: 0 }}>
      <style>{`
        @media (max-width: 768px) {
          .auth-container {
            margin: 2rem auto !important;
            padding: 24px !important;
          }
        }
        @media (max-width: 480px) {
          .auth-container {
            margin: 1rem auto !important;
            padding: 20px !important;
          }
        }
      `}</style>
      <div className="auth-container" style={{
        maxWidth: 400,
        margin: '4rem auto',
        padding: 32,
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        background: cardBg,
        border: `1px solid ${border}`,
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24, fontWeight: 700, color: text }}>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required style={{ width: '100%', marginBottom: 12, padding: 10, borderRadius: 8, border: `1px solid ${inputBorder}`, fontSize: 16, background: inputBg, color: inputText }} />
          )}
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ width: '100%', marginBottom: 12, padding: 10, borderRadius: 8, border: `1px solid ${inputBorder}`, fontSize: 16, background: inputBg, color: inputText }} />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required style={{ width: '100%', marginBottom: 16, padding: 10, borderRadius: 8, border: `1px solid ${inputBorder}`, fontSize: 16, background: inputBg, color: inputText }} />
          <button type="submit" style={{ width: '100%', marginBottom: 12, padding: 12, borderRadius: 8, background: btnBg, color: btnText, fontWeight: 600, fontSize: 16, border: 'none', boxShadow: '0 2px 8px rgba(99,102,241,0.08)' }}>{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)} style={{ width: '100%', padding: 10, borderRadius: 8, background: btnBgAlt, color: btnTextAlt, fontWeight: 600, border: 'none', fontSize: 15, marginBottom: 8 }}>
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>
        {error && <div style={{ color: '#ef4444', marginTop: 8, textAlign: 'center', fontWeight: 500 }}>{error}</div>}
      </div>
    </div>
  );
} 