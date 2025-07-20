const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRouter = require('./routes/authRouter');
const journalRouter = require('./routes/journalRouter');
const chatbotRouter = require('./routes/chatbotRouter');
const profileRouter = require('./routes/profileRouter');

const app = express();

// Middleware
app.use(cors());
app.use(cors({
  origin: 'https://serenityspacex.netlify.app/', 
  credentials: true
}));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/journals', journalRouter);
app.use('/api/chatbot', chatbotRouter);
app.use('/api/profile', profileRouter);

// Health check
app.get('/', (req, res) => {
  res.send('SerenitySpace backend is running');
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
