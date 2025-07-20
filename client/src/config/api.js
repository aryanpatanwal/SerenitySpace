// API Configuration
const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/+$/, '');

export const API_ENDPOINTS = {
  AUTH: `${API_BASE_URL}/api/auth`,
  JOURNALS: `${API_BASE_URL}/api/journals`,
  CHATBOT: `${API_BASE_URL}/api/chatbot`,
  PROFILE: `${API_BASE_URL}/api/profile`,
};

export default API_BASE_URL; 