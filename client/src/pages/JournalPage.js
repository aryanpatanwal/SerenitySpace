import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000/api/journals';

export default function JournalPage({ user, onLogout }) {
  const [journals, setJournals] = useState([]);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState('');

  const fetchJournals = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setJournals(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => { fetchJournals(); }, []);

  const handleAdd = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({ content }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setJournals([data, ...journals]);
      setContent('');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async id => {
    if (!window.confirm('Delete this journal entry?')) return;
    setError('');
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
      });
      if (!res.ok) throw new Error('Failed to delete');
      setJournals(journals.filter(j => j._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const startEdit = (id, content) => {
    setEditingId(id);
    setEditContent(content);
  };

  const handleEdit = async id => {
    setError('');
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({ content: editContent }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setJournals(journals.map(j => j._id === id ? data : j));
      setEditingId(null);
      setEditContent('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: 24 }}>
      <h2>Welcome, {user.username}!</h2>
      <button onClick={onLogout} style={{ float: 'right', marginBottom: 16 }}>Logout</button>
      <form onSubmit={handleAdd} style={{ marginBottom: 16 }}>
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="How are you feeling today?" required style={{ width: '100%', minHeight: 60, marginBottom: 8 }} />
        <button type="submit">Add Journal Entry</button>
      </form>
      {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
      <div>
        {journals.length === 0 ? <p>No journal entries yet.</p> :
          journals.map(j => (
            <div key={j._id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 12, marginBottom: 12 }}>
              <div style={{ fontSize: 12, color: '#888' }}>{new Date(j.createdAt).toLocaleString()}</div>
              {editingId === j._id ? (
                <>
                  <textarea value={editContent} onChange={e => setEditContent(e.target.value)} style={{ width: '100%', minHeight: 40 }} />
                  <button onClick={() => handleEdit(j._id)} style={{ marginRight: 8 }}>Save</button>
                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <div>{j.content}</div>
                  <button onClick={() => startEdit(j._id, j.content)} style={{ marginRight: 8 }}>Edit</button>
                  <button onClick={() => handleDelete(j._id)}>Delete</button>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
} 