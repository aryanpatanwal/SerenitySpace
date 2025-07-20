import React, { useState } from 'react';

const API_URL = 'http://localhost:5000/api/chatbot';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendMessage = async e => {
    e.preventDefault();
    if (!input.trim()) return;
    setError('');
    setLoading(true);
    const userMsg = { role: 'user', content: input };
    setMessages(msgs => [...msgs, userMsg]);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setMessages(msgs => [...msgs, { role: 'assistant', content: data.reply }]);
      setInput('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: 24 }}>
      <h2>SerenitySpace Chatbot</h2>
      <div style={{ minHeight: 200, border: '1px solid #ccc', borderRadius: 8, padding: 12, marginBottom: 16 }}>
        {messages.length === 0 ? <p>Start a conversation!</p> :
          messages.map((msg, i) => (
            <div key={i} style={{ textAlign: msg.role === 'user' ? 'right' : 'left', margin: '8px 0' }}>
              <span style={{ fontWeight: msg.role === 'user' ? 'bold' : 'normal' }}>{msg.role === 'user' ? 'You' : 'Bot'}: </span>
              {msg.content}
            </div>
          ))}
      </div>
      <form onSubmit={sendMessage} style={{ display: 'flex', gap: 8 }}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type your message..." style={{ flex: 1 }} />
        <button type="submit" disabled={loading}>Send</button>
      </form>
      {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
    </div>
  );
} 