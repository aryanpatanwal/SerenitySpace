import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000/api/profile';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({ username: '', email: '' });
  const [pwForm, setPwForm] = useState({ oldPassword: '', newPassword: '' });
  const [msg, setMsg] = useState('');
  const [pwMsg, setPwMsg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(API_URL, {
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
      const res = await fetch(API_URL, {
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
      const res = await fetch(API_URL + '/password', {
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

  if (!profile) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 24 }}>
      <h2>Profile</h2>
      <form onSubmit={handleUpdate} style={{ marginBottom: 24 }}>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" required style={{ width: '100%', marginBottom: 8 }} />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required style={{ width: '100%', marginBottom: 8 }} />
        <button type="submit">Update Profile</button>
        {msg && <div style={{ color: 'green', marginTop: 8 }}>{msg}</div>}
      </form>
      <form onSubmit={handlePwUpdate}>
        <input name="oldPassword" type="password" value={pwForm.oldPassword} onChange={handlePwChange} placeholder="Old Password" required style={{ width: '100%', marginBottom: 8 }} />
        <input name="newPassword" type="password" value={pwForm.newPassword} onChange={handlePwChange} placeholder="New Password" required style={{ width: '100%', marginBottom: 8 }} />
        <button type="submit">Change Password</button>
        {pwMsg && <div style={{ color: 'green', marginTop: 8 }}>{pwMsg}</div>}
      </form>
      {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
    </div>
  );
} 