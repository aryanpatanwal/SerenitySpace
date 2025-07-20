import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { API_ENDPOINTS } from '../config/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function JournalPage({ user, onLogout, darkMode }) {
  const [journals, setJournals] = useState([]);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' or 'history'
  const [todayInsight, setTodayInsight] = useState(null);
  const [aiConsent, setAiConsent] = useState(localStorage.getItem('aiConsent') === 'true');
  const [showConsentModal, setShowConsentModal] = useState(!aiConsent);

  const fetchJournals = async () => {
    try {
      const res = await fetch(API_ENDPOINTS.JOURNALS, {
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setJournals(data);
      if (aiConsent) {
        generateTodayInsight(data);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleConsent = (consent) => {
    setAiConsent(consent);
    localStorage.setItem('aiConsent', consent.toString());
    setShowConsentModal(false);
    if (consent) {
      generateTodayInsight(journals);
    }
  };

  const generateTodayInsight = (journalData) => {
    if (!aiConsent || journalData.length === 0) {
      setTodayInsight({
        type: 'welcome',
        title: 'Welcome to Your Mental Health Journey',
        content: 'Start writing your first journal entry to track your emotional patterns.',
        exercise: 'Try a 5-minute gratitude practice: Write down 3 things you\'re thankful for today.'
      });
      return;
    }

    const recentEntries = journalData.slice(0, 5);
    const sentimentCounts = recentEntries.reduce((acc, entry) => {
      acc[entry.sentiment] = (acc[entry.sentiment] || 0) + 1;
      return acc;
    }, {});

    const dominantSentiment = Object.keys(sentimentCounts).reduce((a, b) => 
      sentimentCounts[a] > sentimentCounts[b] ? a : b
    );

    const insights = {
      positive: {
        title: 'You\'re on a Positive Streak!',
        content: 'Your recent entries show a positive outlook. Keep up the great work in maintaining this mindset.',
        exercise: 'Practice positive reinforcement: Write down one thing you did well today and celebrate it.'
      },
      negative: {
        title: 'Supporting You Through Challenges',
        content: 'I notice you\'ve been experiencing some difficult emotions. Remember, it\'s okay to not be okay.',
        exercise: 'Try the 4-7-8 breathing technique: Inhale for 4, hold for 7, exhale for 8. Repeat 4 times.'
      },
      mixed: {
        title: 'Navigating Life\'s Ups and Downs',
        content: 'You\'re experiencing a mix of emotions, which is completely normal. This shows emotional awareness.',
        exercise: 'Practice emotional labeling: Name 3 emotions you\'re feeling right now without judgment.'
      },
      neutral: {
        title: 'Finding Your Balance',
        content: 'You\'re in a stable emotional state. This is a great foundation for growth and self-reflection.',
        exercise: 'Try mindful observation: Spend 5 minutes noticing your surroundings with all your senses.'
      }
    };

    setTodayInsight(insights[dominantSentiment] || insights.neutral);
  };

  useEffect(() => { fetchJournals(); }, []);

  const handleAdd = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(API_ENDPOINTS.JOURNALS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({ content, aiAnalysis: aiConsent }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      setJournals([data, ...journals]);
      setContent('');
      if (aiConsent) {
        generateTodayInsight([data, ...journals]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async id => {
    if (!window.confirm('Delete this journal entry?')) return;
    setError('');
    try {
      const res = await fetch(`${API_ENDPOINTS.JOURNALS}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') },
      });
      if (!res.ok) throw new Error('Failed to delete');
      const updatedJournals = journals.filter(j => j._id !== id);
      setJournals(updatedJournals);
      if (aiConsent) {
        generateTodayInsight(updatedJournals);
      }
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
    setLoading(true);
    try {
      const res = await fetch(`${API_ENDPOINTS.JOURNALS}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
        body: JSON.stringify({ content: editContent, aiAnalysis: aiConsent }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error');
      const updatedJournals = journals.map(j => j._id === id ? data : j);
      setJournals(updatedJournals);
      setEditingId(null);
      setEditContent('');
      if (aiConsent) {
        generateTodayInsight(updatedJournals);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return '#10b981';
      case 'negative': return '#ef4444';
      case 'mixed': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'positive': return '😊';
      case 'negative': return '😔';
      case 'mixed': return '😐';
      default: return '😐';
    }
  };

  const getSentimentValue = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 3;
      case 'mixed': return 2;
      case 'neutral': return 1;
      case 'negative': return 0;
      default: return 1;
    }
  };

  const prepareChartData = () => {
    const last7Days = journals
      .filter(j => {
        const entryDate = new Date(j.date || j.createdAt);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return entryDate >= weekAgo;
      })
      .sort((a, b) => new Date(a.date || a.createdAt) - new Date(b.date || b.createdAt));

    const labels = last7Days.map(j => {
      const date = new Date(j.date || j.createdAt);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });

    const data = last7Days.map(j => getSentimentValue(j.sentiment));

    return {
      labels,
      datasets: [
        {
          label: 'Mood Trend',
          data,
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          tension: 0.4,
          fill: true,
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Your Mood Over the Last 7 Days',
        color: darkMode ? '#f3f4f6' : '#222',
        font: {
          size: 16,
          weight: '600',
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            const labels = ['Negative', 'Neutral', 'Mixed', 'Positive'];
            return labels[value] || '';
          },
          color: darkMode ? '#a1a1aa' : '#6b7280',
        },
        grid: {
          color: darkMode ? '#27272a' : '#e5e7eb',
        },
      },
      x: {
        ticks: {
          color: darkMode ? '#a1a1aa' : '#6b7280',
        },
        grid: {
          color: darkMode ? '#27272a' : '#e5e7eb',
        },
      },
    },
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
  const btnBgAlt = darkMode ? '#23232a' : '#f1f5f9';
  const btnTextAlt = darkMode ? '#a5b4fc' : '#6366f1';
  const btnTextDanger = '#ef4444';

  return (
    <div style={{ minHeight: '100vh', background: bg, color: text, padding: 0, animation: 'fadeIn 0.7s' }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .journal-card { transition: box-shadow 0.2s, transform 0.2s; }
        .journal-card:hover { box-shadow: 0 8px 32px rgba(99,102,241,0.13); transform: translateY(-4px) scale(1.02); }
        .journal-btn { transition: background 0.2s, color 0.2s, transform 0.1s; }
        .journal-btn:hover { background: #6366f1; color: #fff; }
        .journal-btn:active { transform: scale(0.97); }
        .journal-input:focus, .journal-textarea:focus { outline: 2px solid #6366f1; }
        .fade-error { animation: fadeIn 0.5s; }
        .keyword-tag { 
          display: inline-block; 
          background: #6366f1; 
          color: white; 
          padding: 4px 8px; 
          border-radius: 12px; 
          font-size: 12px; 
          margin: 2px; 
        }
        .ai-feedback { 
          background: ${darkMode ? '#1f2937' : '#f3f4f6'}; 
          border-left: 4px solid #6366f1; 
          padding: 12px; 
          border-radius: 8px; 
          margin-top: 12px; 
        }
        .tab-btn { 
          padding: 12px 24px; 
          border: none; 
          background: transparent; 
          color: ${faded}; 
          font-weight: 600; 
          cursor: pointer; 
          border-bottom: 2px solid transparent; 
          transition: all 0.2s; 
        }
        .tab-btn.active { 
          color: #6366f1; 
          border-bottom-color: #6366f1; 
        }
        .insight-card {
          background: ${darkMode ? '#1f2937' : '#f3f4f6'};
          border-left: 4px solid #6366f1;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 24px;
        }
        .chart-container {
          background: ${cardBg};
          border: 1px solid ${border};
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 24px;
        }
        .consent-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .consent-content {
          background: ${cardBg};
          border-radius: 12px;
          padding: 24px;
          max-width: 500px;
          margin: 20px;
          border: 1px solid ${border};
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
          .journal-container {
            padding: 16px !important;
            margin: 1rem auto !important;
          }
          .journal-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .tab-btn {
            padding: 10px 16px !important;
            font-size: 14px !important;
          }
          .insight-card {
            padding: 16px !important;
          }
          .chart-container {
            padding: 16px !important;
            overflow-x: auto;
          }
          .journal-textarea {
            min-height: 100px !important;
          }
        }
        @media (max-width: 480px) {
          .journal-container {
            padding: 12px !important;
          }
          .tab-btn {
            padding: 8px 12px !important;
            font-size: 13px !important;
          }
          .insight-card {
            padding: 12px !important;
          }
          .chart-container {
            padding: 12px !important;
          }
        }
      `}</style>

      {/* AI Consent Modal */}
      {showConsentModal && (
        <div className="consent-modal">
          <div className="consent-content">
            <h3 style={{ color: text, marginBottom: 16, fontSize: 18, fontWeight: 600 }}>
              AI Analysis Consent
            </h3>
            <p style={{ color: text, marginBottom: 16, lineHeight: 1.6 }}>
              To provide you with personalized insights and mood tracking, we can analyze your journal entries using AI. 
              This helps us understand your emotional patterns and suggest relevant exercises.
            </p>
            <div className="disclaimer">
              <strong>Important:</strong> AI-generated suggestions are for general wellness support only and do not constitute medical advice. 
              Always consult with qualified healthcare professionals for medical concerns.
            </div>
            <p style={{ color: text, marginBottom: 20, lineHeight: 1.6 }}>
              Your privacy is important. AI analysis is optional and you can change this setting anytime.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button 
                onClick={() => handleConsent(true)}
                style={{ 
                  padding: '12px 24px', 
                  borderRadius: 8, 
                  background: btnBg, 
                  color: btnText, 
                  fontWeight: 600, 
                  border: 'none', 
                  fontSize: 16,
                  cursor: 'pointer'
                }}
              >
                Enable AI Analysis
              </button>
              <button 
                onClick={() => handleConsent(false)}
                style={{ 
                  padding: '12px 24px', 
                  borderRadius: 8, 
                  background: btnBgAlt, 
                  color: btnTextAlt, 
                  fontWeight: 600, 
                  border: 'none', 
                  fontSize: 16,
                  cursor: 'pointer'
                }}
              >
                Skip for Now
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="journal-container" style={{ maxWidth: 1200, margin: '2rem auto', padding: 24 }}>
        <div className="journal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ fontWeight: 700, color: text }}>Welcome, {user.username}!</h2>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button 
              onClick={() => setShowConsentModal(true)}
              style={{ 
                background: btnBgAlt, 
                color: btnTextAlt, 
                fontWeight: 600, 
                border: 'none', 
                fontSize: 14, 
                padding: '8px 16px', 
                borderRadius: 8, 
                cursor: 'pointer' 
              }}
            >
              {aiConsent ? 'AI: Enabled' : 'AI: Disabled'}
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 24, borderBottom: `1px solid ${border}` }}>
          <button 
            className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            Journal History
          </button>
        </div>

        {activeTab === 'dashboard' ? (
          <div>
            {/* Today's Insight Section */}
            {todayInsight && (
              <div className="insight-card">
                <h3 style={{ color: '#6366f1', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                  {todayInsight.title}
                </h3>
                <p style={{ color: text, marginBottom: 16, lineHeight: 1.6 }}>
                  {todayInsight.content}
                </p>
                <div style={{ background: cardBg, padding: 16, borderRadius: 8, border: `1px solid ${border}` }}>
                  <div style={{ fontSize: 14, color: '#6366f1', fontWeight: 600, marginBottom: 8 }}>
                    Try This Exercise:
                  </div>
                  <div style={{ color: text, lineHeight: 1.5 }}>
                    {todayInsight.exercise}
                  </div>
                </div>
                {aiConsent && (
                  <div className="disclaimer">
                    <strong>AI-generated suggestions, not medical advice.</strong> These insights are based on your journal entries and are meant for general wellness support only.
                  </div>
                )}
              </div>
            )}

            {/* Mood Trend Chart */}
            {journals.length > 0 && aiConsent && (
              <div className="chart-container">
                <Line data={prepareChartData()} options={chartOptions} />
                <div className="disclaimer" style={{ marginTop: 16 }}>
                  <strong>AI-generated mood analysis, not medical advice.</strong> This chart shows emotional patterns based on AI analysis of your journal entries.
                </div>
              </div>
            )}

            {/* Quick Journal Entry */}
            <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <h3 style={{ color: text, marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Quick Journal Entry</h3>
              <form onSubmit={handleAdd}>
                <textarea 
                  value={content} 
                  onChange={e => setContent(e.target.value)} 
                  placeholder="How are you feeling today? Share your thoughts, emotions, and experiences..." 
                  required 
                  className="journal-textarea" 
                  style={{ 
                    width: '100%', 
                    minHeight: 80, 
                    marginBottom: 12, 
                    padding: 12, 
                    borderRadius: 8, 
                    border: `1px solid ${inputBorder}`, 
                    fontSize: 16, 
                    resize: 'vertical', 
                    background: inputBg, 
                    color: inputText 
                  }} 
                />
                <button 
                  type="submit" 
                  className="journal-btn" 
                  disabled={loading}
                  style={{ 
                    padding: 12, 
                    borderRadius: 8, 
                    background: loading ? '#9ca3af' : btnBg, 
                    color: btnText, 
                    fontWeight: 600, 
                    border: 'none', 
                    fontSize: 16, 
                    width: '100%',
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                >
                  {loading ? 'Analyzing...' : 'Add Journal Entry'}
                </button>
                {aiConsent && (
                  <div className="disclaimer">
                    <strong>AI analysis enabled.</strong> Your entry will be analyzed for sentiment and insights. You can disable this in settings.
                  </div>
                )}
              </form>
            </div>

            {/* Recent Entries Preview */}
            {journals.length > 0 && (
              <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ color: text, marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Recent Entries</h3>
                <div>
                  {journals.slice(0, 3).map(j => (
                    <div key={j._id} style={{ borderBottom: `1px solid ${border}`, padding: '12px 0', marginBottom: 12 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <div style={{ fontSize: 12, color: faded }}>
                          {new Date(j.date || j.createdAt).toLocaleDateString()}
                        </div>
                        {j.sentiment && aiConsent && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{ fontSize: 14 }}>{getSentimentIcon(j.sentiment)}</span>
                            <span style={{ 
                              fontSize: 12, 
                              color: getSentimentColor(j.sentiment), 
                              fontWeight: 600,
                              textTransform: 'capitalize'
                            }}>
                              {j.sentiment}
                            </span>
                          </div>
                        )}
                      </div>
                      <div style={{ color: text, fontSize: 14, lineHeight: 1.5 }}>
                        {j.content.length > 100 ? j.content.substring(0, 100) + '...' : j.content}
                      </div>
                    </div>
                  ))}
                  {journals.length > 3 && (
                    <button 
                      onClick={() => setActiveTab('history')}
                      style={{ 
                        color: '#6366f1', 
                        background: 'none', 
                        border: 'none', 
                        fontSize: 14, 
                        fontWeight: 600, 
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      View all {journals.length} entries →
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* Full Journal History */}
            <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <h3 style={{ color: text, marginBottom: 16, fontSize: 18, fontWeight: 600 }}>Journal Entry</h3>
              <form onSubmit={handleAdd}>
                <textarea 
                  value={content} 
                  onChange={e => setContent(e.target.value)} 
                  placeholder="How are you feeling today? Share your thoughts, emotions, and experiences..." 
                  required 
                  className="journal-textarea" 
                  style={{ 
                    width: '100%', 
                    minHeight: 80, 
                    marginBottom: 12, 
                    padding: 12, 
                    borderRadius: 8, 
                    border: `1px solid ${inputBorder}`, 
                    fontSize: 16, 
                    resize: 'vertical', 
                    background: inputBg, 
                    color: inputText 
                  }} 
                />
                <button 
                  type="submit" 
                  className="journal-btn" 
                  disabled={loading}
                  style={{ 
                    padding: 12, 
                    borderRadius: 8, 
                    background: loading ? '#9ca3af' : btnBg, 
                    color: btnText, 
                    fontWeight: 600, 
                    border: 'none', 
                    fontSize: 16, 
                    width: '100%',
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                >
                  {loading ? 'Analyzing...' : 'Add Journal Entry'}
                </button>
                {aiConsent && (
                  <div className="disclaimer">
                    <strong>AI analysis enabled.</strong> Your entry will be analyzed for sentiment and insights. You can disable this in settings.
                  </div>
                )}
              </form>
            </div>

            {error && <div className="fade-error" style={{ color: '#ef4444', marginBottom: 8, textAlign: 'center', fontWeight: 500 }}>{error}</div>}
            
            <div>
              {journals.length === 0 ? <p style={{ color: faded, textAlign: 'center' }}>No journal entries yet. Start writing to see AI insights!</p> :
                journals.map(j => (
                  <div key={j._id} className="journal-card" style={{ border: `1px solid ${border}`, borderRadius: 12, padding: 20, marginBottom: 20, background: cardBg, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                      <div style={{ fontSize: 12, color: faded }}>
                        {new Date(j.date || j.createdAt).toLocaleDateString()} at {new Date(j.date || j.createdAt).toLocaleTimeString()}
                      </div>
                      {j.sentiment && aiConsent && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ fontSize: 16 }}>{getSentimentIcon(j.sentiment)}</span>
                          <span style={{ 
                            fontSize: 12, 
                            color: getSentimentColor(j.sentiment), 
                            fontWeight: 600,
                            textTransform: 'capitalize'
                          }}>
                            {j.sentiment}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {editingId === j._id ? (
                      <>
                        <textarea 
                          value={editContent} 
                          onChange={e => setEditContent(e.target.value)} 
                          className="journal-textarea" 
                          style={{ 
                            width: '100%', 
                            minHeight: 60, 
                            marginBottom: 12, 
                            padding: 10, 
                            borderRadius: 8, 
                            border: `1px solid ${inputBorder}`, 
                            fontSize: 15, 
                            background: inputBg, 
                            color: inputText 
                          }} 
                        />
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button 
                            onClick={() => handleEdit(j._id)} 
                            disabled={loading}
                            className="journal-btn" 
                            style={{ 
                              padding: 8, 
                              borderRadius: 8, 
                              background: loading ? '#9ca3af' : btnBg, 
                              color: btnText, 
                              fontWeight: 600, 
                              border: 'none', 
                              fontSize: 15,
                              cursor: loading ? 'not-allowed' : 'pointer'
                            }}
                          >
                            {loading ? 'Saving...' : 'Save'}
                          </button>
                          <button 
                            onClick={() => setEditingId(null)} 
                            className="journal-btn" 
                            style={{ 
                              padding: 8, 
                              borderRadius: 8, 
                              background: btnBgAlt, 
                              color: btnTextAlt, 
                              fontWeight: 600, 
                              border: 'none', 
                              fontSize: 15 
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ marginBottom: 12, lineHeight: 1.6, fontSize: 15 }}>{j.content}</div>
                        
                        {j.keywords && j.keywords.length > 0 && aiConsent && (
                          <div style={{ marginBottom: 12 }}>
                            <div style={{ fontSize: 12, color: faded, marginBottom: 4 }}>Key themes:</div>
                            <div>
                              {j.keywords.map((keyword, index) => (
                                <span key={index} className="keyword-tag">{keyword}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {j.aiFeedback && aiConsent && (
                          <div className="ai-feedback">
                            <div style={{ fontSize: 12, color: faded, marginBottom: 4, fontWeight: 600 }}>AI Insights:</div>
                            <div style={{ fontSize: 14, lineHeight: 1.5 }}>{j.aiFeedback}</div>
                            <div className="disclaimer" style={{ marginTop: 8 }}>
                              <strong>AI-generated suggestions, not medical advice.</strong>
                            </div>
                          </div>
                        )}
                        
                        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                          <button 
                            onClick={() => startEdit(j._id, j.content)} 
                            className="journal-btn" 
                            style={{ 
                              padding: 8, 
                              borderRadius: 8, 
                              background: btnBgAlt, 
                              color: btnTextAlt, 
                              fontWeight: 600, 
                              border: 'none', 
                              fontSize: 15 
                            }}
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDelete(j._id)} 
                            className="journal-btn" 
                            style={{ 
                              padding: 8, 
                              borderRadius: 8, 
                              background: btnBgAlt, 
                              color: btnTextDanger, 
                              fontWeight: 600, 
                              border: 'none', 
                              fontSize: 15 
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 