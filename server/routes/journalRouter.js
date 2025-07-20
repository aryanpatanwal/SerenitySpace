const express = require('express');
const router = express.Router();
const Journal = require('../models/Journal');
const auth = require('../middleware/auth');
const OpenAI = require('openai');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1'
});

// Function to analyze journal content with AI
async function analyzeJournalContent(content) {
  try {
    const prompt = `Analyze the following journal entry and provide:
1. Sentiment (positive, negative, neutral, or mixed)
2. Key themes/keywords (comma-separated)
3. Constructive feedback and insights

Journal entry: "${content}"

Please respond in this exact JSON format:
{
  "sentiment": "positive/negative/neutral/mixed",
  "keywords": ["keyword1", "keyword2", "keyword3"],
  "aiFeedback": "Your constructive feedback here"
}`;

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "provider-1/gpt-4o-latest",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
    });

    const response = completion.choices[0].message.content;
    return JSON.parse(response);
  } catch (error) {
    console.error('AI analysis error:', error);
    return {
      sentiment: 'neutral',
      keywords: [],
      aiFeedback: 'Unable to analyze at this time.'
    };
  }
}

// Create a new journal entry
router.post('/', auth, async (req, res) => {
  try {
    const { content, date, aiAnalysis } = req.body;
    
    if (!content) {
      return res.status(400).json({ message: 'Content is required' });
    }

    let journalData = {
      userId: req.user,
      date: date || new Date(),
      content: content,
    };

    // Only perform AI analysis if user has consented
    if (aiAnalysis === true) {
      try {
        const analysis = await analyzeJournalContent(content);
        journalData.sentiment = analysis.sentiment;
        journalData.keywords = analysis.keywords;
        journalData.aiFeedback = analysis.aiFeedback;
      } catch (aiError) {
        console.error('AI analysis failed:', aiError);
        // Continue without AI analysis if it fails
      }
    }

    const journal = new Journal(journalData);
    await journal.save();
    res.status(201).json(journal);
  } catch (err) {
    console.error('Journal creation error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all journals for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const journals = await Journal.find({ userId: req.user }).sort({ date: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a single journal by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const journal = await Journal.findOne({ _id: req.params.id, userId: req.user });
    if (!journal) return res.status(404).json({ message: 'Journal not found' });
    res.json(journal);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a journal entry
router.put('/:id', auth, async (req, res) => {
  try {
    const { content, date, aiAnalysis } = req.body;
    
    if (!content) {
      return res.status(400).json({ message: 'Content is required' });
    }

    let updateData = {
      content: content,
      date: date || new Date(),
    };

    // Only perform AI analysis if user has consented
    if (aiAnalysis === true) {
      try {
        const analysis = await analyzeJournalContent(content);
        updateData.sentiment = analysis.sentiment;
        updateData.keywords = analysis.keywords;
        updateData.aiFeedback = analysis.aiFeedback;
      } catch (aiError) {
        console.error('AI analysis failed:', aiError);
        // Continue without AI analysis if it fails
      }
    } else {
      // If AI analysis is disabled, remove AI-related fields
      updateData.sentiment = undefined;
      updateData.keywords = undefined;
      updateData.aiFeedback = undefined;
    }

    const journal = await Journal.findOneAndUpdate(
      { _id: req.params.id, userId: req.user },
      updateData,
      { new: true }
    );
    
    if (!journal) return res.status(404).json({ message: 'Journal not found' });
    res.json(journal);
  } catch (err) {
    console.error('Journal update error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a journal entry
router.delete('/:id', auth, async (req, res) => {
  try {
    const journal = await Journal.findOneAndDelete({ _id: req.params.id, userId: req.user });
    if (!journal) return res.status(404).json({ message: 'Journal not found' });
    res.json({ message: 'Journal deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 