import React, { useState } from 'react';
import { API_ENDPOINTS } from '../config/api';

export default function ChatbotPage({ darkMode }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const chatContainerRef = React.useRef(null);

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async e => {
    e.preventDefault();
    if (!input.trim()) return;
    setError('');
    setLoading(true);
    const userMsg = { role: 'user', content: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput(''); // Clear input immediately after adding user message
    try {
      const res = await fetch(API_ENDPOINTS.CHATBOT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({ message: userMsg.content }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setMessages(msgs => [...msgs, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatMessage = (content) => {
    // Split by line breaks and format each section
    const sections = content.split('\n\n');
    return sections.map((section, index) => {
      const lines = section.split('\n');
      return (
        <div key={index} style={{ marginBottom: index < sections.length - 1 ? 16 : 0 }}>
          {lines.map((line, lineIndex) => {
            // Check if line starts with a number or bullet point
            const isList = /^(\d+\.|\*|\-|\•)/.test(line.trim());
            // Only bold specific section headers
            const isSectionHeader = /^(Tone Analysis|Area for Growth|Mind Exercise\/Advice):/.test(line.trim());
            
            if (isList) {
              return (
                <div key={lineIndex} style={{ 
                  marginLeft: 16, 
                  marginBottom: 4,
                  display: 'flex',
                  alignItems: 'flex-start'
                }}>
                  <span style={{ marginRight: 8, color: '#6366f1' }}>•</span>
                  <span>{line.replace(/^(\d+\.|\*|\-|\•)\s*/, '')}</span>
                </div>
              );
            } else if (isSectionHeader) {
              const [label, ...rest] = line.split(':');
              return (
                <div key={lineIndex} style={{ marginBottom: 8 }}>
                  <strong style={{ color: '#6366f1' }}>{label}:</strong>
                  {rest.length > 0 && <span> {rest.join(':')}</span>}
                </div>
              );
            } else {
              return (
                <div key={lineIndex} style={{ 
                  marginBottom: lineIndex < lines.length - 1 ? 8 : 0,
                  lineHeight: 1.6
                }}>
                  {line}
                </div>
              );
            }
          })}
        </div>
      );
    });
  };

  const bg = darkMode ? '#18181b' : '#f8fafc';
  const cardBg = darkMode ? '#23232a' : '#fff';
  const border = darkMode ? '#27272a' : '#e0e0e0';
  const userBubble = darkMode ? '#6366f1' : '#6366f1';
  const userText = darkMode ? '#fff' : '#fff';
  const botBubble = darkMode ? '#23232a' : '#fff';
  const botText = darkMode ? '#f3f4f6' : '#222';
  const botBorder = darkMode ? '#373737' : '#e0e0e0';
  const inputBg = darkMode ? '#18181b' : '#fff';
  const inputBorder = darkMode ? '#27272a' : '#d1d5db';
  const inputText = darkMode ? '#f3f4f6' : '#222';
  const subtitleColor = darkMode ? '#a1a1aa' : '#6b7280';

  return (
    <div style={{ minHeight: '100vh', background: bg, display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .chatbot-bubble { 
          max-width: 85%; 
          padding: 16px 20px; 
          border-radius: 18px; 
          margin: 8px 0; 
          font-size: 15px; 
          line-height: 1.6; 
          word-break: break-word; 
          display: inline-block; 
          white-space: pre-wrap;
        }
        .chatbot-bubble-user { 
          background: ${userBubble}; 
          color: ${userText}; 
          border-bottom-right-radius: 4px; 
          margin-left: auto; 
        }
        .chatbot-bubble-bot { 
          background: ${botBubble}; 
          color: ${botText}; 
          border-bottom-left-radius: 4px; 
          margin-right: auto; 
          border: 1px solid ${botBorder}; 
        }
        .chatbot-scroll { 
          overflow-y: auto; 
          flex: 1; 
          padding: 24px 0 16px 0; 
        }
        .chatbot-input-bar { 
          display: flex; 
          gap: 8px; 
          padding: 16px 0 8px 0; 
          background: ${bg}; 
          position: sticky; 
          bottom: 0; 
          z-index: 2; 
        }
        .chatbot-input:focus { outline: 2px solid #6366f1; }
        .chatbot-btn { transition: background 0.2s, color 0.2s, transform 0.1s; }
        .chatbot-btn:hover { background: #6366f1; color: #fff; }
        .chatbot-btn:active { transform: scale(0.97); }
        .fade-error { animation: fadeIn 0.5s; }
        .welcome-message { 
          background: ${darkMode ? '#1f2937' : '#f3f4f6'}; 
          border-left: 4px solid #6366f1; 
          padding: 20px; 
          border-radius: 12px; 
          margin: 16px 0; 
          font-size: 14px;
          line-height: 1.6;
        }
        .disclaimer {
          background: ${darkMode ? '#1f2937' : '#fef3c7'};
          border: 1px solid ${darkMode ? '#374151' : '#f59e0b'};
          border-radius: 8px;
          padding: 12px;
          margin: 12px 0;
          font-size: 12px;
          color: ${darkMode ? '#d1d5db' : '#92400e'};
        }
        @media (max-width: 768px) {
          .chatbot-container {
            height: calc(100vh - 120px) !important;
            margin: 0 !important;
            border-radius: 0 !important;
            max-width: 100% !important;
          }
          .chatbot-scroll {
            padding: 16px !important;
          }
          .chatbot-input-bar {
            padding: 12px 16px !important;
          }
          .chatbot-bubble {
            max-width: 90% !important;
            font-size: 14px !important;
            padding: 12px 16px !important;
          }
          .welcome-message {
            padding: 16px !important;
            font-size: 13px !important;
          }
        }
        @media (max-width: 480px) {
          .chatbot-container {
            height: calc(100vh - 100px) !important;
          }
          .chatbot-scroll {
            padding: 12px !important;
          }
          .chatbot-input-bar {
            padding: 8px 12px !important;
          }
          .chatbot-bubble {
            max-width: 95% !important;
            font-size: 13px !important;
            padding: 10px 14px !important;
          }
          .welcome-message {
            padding: 12px !important;
            font-size: 12px !important;
          }
        }
      `}</style>
      <div className="chatbot-container" style={{ maxWidth: 900, width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', height: '90vh', background: cardBg, borderRadius: 16, boxShadow: '0 2px 12px rgba(99,102,241,0.07)', border: `1px solid ${border}`, overflow: 'hidden' }}>
        <div style={{ padding: '18px 0 8px 0', textAlign: 'center' }}>
          <div style={{ fontWeight: 700, color: '#6366f1', fontSize: 24, letterSpacing: 1 }}>Tony</div>
          <div style={{ fontSize: 14, color: subtitleColor, marginTop: 4 }}>Mental Health Assistant</div>
        </div>
        <div ref={chatContainerRef} className="chatbot-scroll" style={{ background: 'none', padding: '0 24px', flex: 1, minHeight: 0 }}>
          {messages.length === 0 ? (
            <div className="welcome-message">
              <div style={{ fontWeight: 600, color: '#6366f1', marginBottom: 8 }}>Welcome! I'm Tony, your mental health assistant.</div>
              <div style={{ color: darkMode ? '#d1d5db' : '#374151' }}>
                I'm here to help you by:
                <br />• Analyzing your emotional tone
                <br />• Suggesting areas for growth
                <br />• Recommending simple mind exercises
                <br /><br />
                Share how you're feeling today, and I'll provide compassionate support and practical advice.
              </div>
              <div className="disclaimer">
                <strong>Important:</strong> AI-generated suggestions are for general wellness support only and do not constitute medical advice. 
                Always consult with qualified healthcare professionals for medical concerns or if you're experiencing a mental health crisis.
              </div>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-end' }}>
                <div className={`chatbot-bubble chatbot-bubble-${msg.role === 'user' ? 'user' : 'bot'}`}>
                  {msg.role === 'user' ? msg.content : formatMessage(msg.content)}
                </div>
              </div>
            ))
          )}
        </div>
        <form onSubmit={sendMessage} className="chatbot-input-bar" style={{ borderTop: `1px solid ${border}`, margin: 0, padding: '16px 24px 8px 24px', background: bg }}>
          <input 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            placeholder="Share how you're feeling today..." 
            className="chatbot-input" 
            style={{ flex: 1, padding: 14, borderRadius: 10, border: `1px solid ${inputBorder}`, fontSize: 17, background: inputBg, color: inputText, transition: 'outline 0.2s' }} 
          />
          <button 
            type="submit" 
            disabled={loading} 
            className="chatbot-btn" 
            style={{ 
              padding: '0 24px', 
              borderRadius: 10, 
              background: loading ? '#9ca3af' : '#6366f1', 
              color: '#fff', 
              fontWeight: 600, 
              border: 'none', 
              fontSize: 17, 
              minWidth: 80, 
              transition: 'background 0.2s, color 0.2s, transform 0.1s',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Thinking...' : 'Send'}
          </button>
        </form>
        {error && <div className="fade-error" style={{ color: '#ef4444', marginTop: 8, textAlign: 'center', fontWeight: 500 }}>{error}</div>}
      </div>
    </div>
  );
} 