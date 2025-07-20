import React, { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../config/api';

export default function ProfilePage({ darkMode, onLogout }) {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({ username: '', email: '' });
  const [pwForm, setPwForm] = useState({ oldPassword: '', newPassword: '' });
  const [msg, setMsg] = useState('');
  const [pwMsg, setPwMsg] = useState('');
  const [error, setError] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetch(API_ENDPOINTS.PROFILE, {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        setForm({ username: data.username, email: data.email });
      });
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handlePwChange = e => setPwForm({ ...pwForm, [e.target.name]: e.target.value });

  const handleUpdate = async e => {
    e.preventDefault();
    setMsg(''); setError('');
    try {
      const res = await fetch(API_ENDPOINTS.PROFILE, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setProfile(data);
      setMsg('Profile updated!');
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePwUpdate = async e => {
    e.preventDefault();
    setPwMsg(''); setError('');
    try {
      const res = await fetch(API_ENDPOINTS.PROFILE + '/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify(pwForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setPwMsg('Password updated!');
      setPwForm({ oldPassword: '', newPassword: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirm !== 'Delete') {
      setError('Please type "Delete" to confirm account deletion');
      return;
    }

    setIsDeleting(true);
    setError('');
    
    try {
      const res = await fetch(API_ENDPOINTS.PROFILE, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
      });
      
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to delete account');
      }
      
      // Account deleted successfully
      localStorage.removeItem('token');
      onLogout();
    } catch (err) {
      setError(err.message);
      setIsDeleting(false);
    }
  };

  const bg = darkMode ? '#18181b' : '#f8fafc';
  const cardBg = darkMode ? '#23232a' : '#fff';
  const border = darkMode ? '#27272a' : '#e0e0e0';
  const text = darkMode ? '#f3f4f6' : '#222';
  const faded = darkMode ? '#a1a1aa' : '#888';
  const inputBg = darkMode ? '#18181b' : '#fff';
  const inputBorder = darkMode ? '#27272a' : '#d1d5db';
  const inputText = darkMode ? '#f3f4f6' : '#222';
  const btnBg = darkMode ? '#6366f1' : '#6366f1';
  const btnText = '#fff';
  const success = '#22c55e';
  const danger = '#ef4444';

  return (
    <div style={{ minHeight: '100vh', background: bg, color: text, padding: 0, animation: 'fadeIn 0.7s' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .profile-card { transition: box-shadow 0.2s, transform 0.2s; }
        .profile-card:hover { box-shadow: 0 8px 32px rgba(99,102,241,0.13); transform: translateY(-4px) scale(1.02); }
        .profile-btn { transition: background 0.2s, color 0.2s, transform 0.1s; }
        .profile-btn:hover { background: #6366f1; color: #fff; }
        .profile-btn:active { transform: scale(0.97); }
        .profile-input:focus { outline: 2px solid #6366f1; }
        .fade-error { animation: fadeIn 0.5s; }
        .fade-success { animation: fadeIn 0.5s; color: ${success}; }
        @media (max-width: 768px) {
          .profile-container {
            padding: 16px !important;
            margin: 1rem auto !important;
          }
          .profile-card {
            padding: 24px !important;
          }
          .modal-content {
            margin: 16px !important;
            padding: 24px !important;
          }
        }
        @media (max-width: 480px) {
          .profile-container {
            padding: 12px !important;
          }
          .profile-card {
            padding: 20px !important;
          }
          .modal-content {
            margin: 12px !important;
            padding: 20px !important;
          }
        }
        .modal-overlay { 
          position: fixed; 
          top: 0; 
          left: 0; 
          right: 0; 
          bottom: 0; 
          background: rgba(0,0,0,0.5); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          z-index: 1000; 
          animation: fadeIn 0.3s;
        }
        .modal-content { 
          animation: slideIn 0.3s; 
          max-width: 90vw;
        }
        @keyframes slideIn { 
          from { opacity: 0; transform: translateY(-20px) scale(0.95); } 
          to { opacity: 1; transform: translateY(0) scale(1); } 
        }
      `}</style>
      
      <div className="profile-container" style={{ maxWidth: 400, margin: '2rem auto', padding: 24 }}>
        <div className="profile-card" style={{ padding: 32, borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', background: cardBg, border: `1px solid ${border}`, marginBottom: 24 }}>
          <h2 style={{ textAlign: 'center', fontWeight: 700, color: text, marginBottom: 24 }}>Profile</h2>
          <form onSubmit={handleUpdate} style={{ marginBottom: 24 }}>
            <input name="username" value={form.username} onChange={handleChange} placeholder="Username" required className="profile-input" style={{ width: '100%', marginBottom: 12, padding: 10, borderRadius: 8, border: `1px solid ${inputBorder}`, fontSize: 16, background: inputBg, color: inputText }} />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="profile-input" style={{ width: '100%', marginBottom: 12, padding: 10, borderRadius: 8, border: `1px solid ${inputBorder}`, fontSize: 16, background: inputBg, color: inputText }} />
            <button type="submit" className="profile-btn" style={{ width: '100%', padding: 12, borderRadius: 8, background: btnBg, color: btnText, fontWeight: 600, fontSize: 16, border: 'none', boxShadow: '0 2px 8px rgba(99,102,241,0.08)' }}>Update Profile</button>
            {msg && <div className="fade-success" style={{ marginTop: 8, textAlign: 'center', fontWeight: 500 }}>{msg}</div>}
          </form>
          <form onSubmit={handlePwUpdate}>
            <input name="oldPassword" type="password" value={pwForm.oldPassword} onChange={handlePwChange} placeholder="Old Password" required className="profile-input" style={{ width: '100%', marginBottom: 12, padding: 10, borderRadius: 8, border: `1px solid ${inputBorder}`, fontSize: 16, background: inputBg, color: inputText }} />
            <input name="newPassword" type="password" value={pwForm.newPassword} onChange={handlePwChange} placeholder="New Password" required className="profile-input" style={{ width: '100%', marginBottom: 12, padding: 10, borderRadius: 8, border: `1px solid ${inputBorder}`, fontSize: 16, background: inputBg, color: inputText }} />
            <button type="submit" className="profile-btn" style={{ width: '100%', padding: 12, borderRadius: 8, background: btnBg, color: btnText, fontWeight: 600, fontSize: 16, border: 'none', boxShadow: '0 2px 8px rgba(99,102,241,0.08)' }}>Change Password</button>
            {pwMsg && <div className="fade-success" style={{ marginTop: 8, textAlign: 'center', fontWeight: 500 }}>{pwMsg}</div>}
          </form>
          {error && <div className="fade-error" style={{ color: danger, marginTop: 8, textAlign: 'center', fontWeight: 500 }}>{error}</div>}
        </div>

        {/* Delete Account Section */}
        <div className="profile-card" style={{ padding: 32, borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', background: cardBg, border: `1px solid ${border}`, borderColor: danger }}>
          <h3 style={{ textAlign: 'center', fontWeight: 700, color: danger, marginBottom: 16 }}>Danger Zone</h3>
          <p style={{ textAlign: 'center', color: faded, marginBottom: 20, fontSize: 14, lineHeight: 1.5 }}>
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button 
            onClick={() => setShowDeleteModal(true)}
            style={{ 
              width: '100%', 
              padding: 12, 
              borderRadius: 8, 
              background: danger, 
              color: '#fff', 
              fontWeight: 600, 
              fontSize: 16, 
              border: 'none', 
              cursor: 'pointer',
              transition: 'background 0.2s, transform 0.1s'
            }}
            onMouseOver={(e) => e.target.style.background = '#dc2626'}
            onMouseOut={(e) => e.target.style.background = danger}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.97)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay" onClick={() => setShowDeleteModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ 
            background: cardBg, 
            padding: 32, 
            borderRadius: 16, 
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)', 
            border: `1px solid ${border}`,
            maxWidth: 400,
            width: '90%'
          }}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <div style={{ 
                width: 64, 
                height: 64, 
                borderRadius: '50%', 
                background: '#fef2f2', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 16px',
                border: `2px solid ${danger}`
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={danger} strokeWidth="2">
                  <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </div>
              <h3 style={{ fontWeight: 700, color: text, marginBottom: 8 }}>We're sad to see you go</h3>
              <p style={{ color: faded, fontSize: 14, lineHeight: 1.6 }}>
                This action cannot be undone. This will permanently delete your account and remove all your data from our servers.
              </p>
            </div>
            
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8, color: text, fontWeight: 500 }}>
                Type "Delete" to confirm:
              </label>
              <input 
                type="text" 
                value={deleteConfirm} 
                onChange={(e) => setDeleteConfirm(e.target.value)}
                placeholder="Delete"
                style={{ 
                  width: '100%', 
                  padding: 12, 
                  borderRadius: 8, 
                  border: `1px solid ${inputBorder}`, 
                  fontSize: 16, 
                  background: inputBg, 
                  color: inputText 
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button 
                onClick={() => setShowDeleteModal(false)}
                style={{ 
                  flex: 1, 
                  padding: 12, 
                  borderRadius: 8, 
                  background: 'transparent', 
                  color: text, 
                  fontWeight: 600, 
                  fontSize: 16, 
                  border: `1px solid ${border}`,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.target.style.background = darkMode ? '#27272a' : '#f1f5f9'}
                onMouseOut={(e) => e.target.style.background = 'transparent'}
              >
                Cancel
              </button>
              <button 
                onClick={handleDeleteAccount}
                disabled={isDeleting || deleteConfirm !== 'Delete'}
                style={{ 
                  flex: 1, 
                  padding: 12, 
                  borderRadius: 8, 
                  background: deleteConfirm === 'Delete' ? danger : '#6b7280', 
                  color: '#fff', 
                  fontWeight: 600, 
                  fontSize: 16, 
                  border: 'none',
                  cursor: deleteConfirm === 'Delete' ? 'pointer' : 'not-allowed',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => {
                  if (deleteConfirm === 'Delete') {
                    e.target.style.background = '#dc2626';
                  }
                }}
                onMouseOut={(e) => {
                  if (deleteConfirm === 'Delete') {
                    e.target.style.background = danger;
                  }
                }}
              >
                {isDeleting ? 'Deleting...' : 'Delete Account'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 