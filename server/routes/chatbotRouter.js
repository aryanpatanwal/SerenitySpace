const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { OpenAI } = require('openai');

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL // add this for custom provider
});

router.post('/', auth, async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ message: 'Message is required' });

    let reply = '';
    try {
      const systemPrompt = `You are Tony, a compassionate mental health assistant. Respond to the user as a supportive, empathetic human friend would. Do not use any headings or labels. Do not follow a rigid structure. Instead, reply in a warm, conversational, and context-aware way, responding naturally to the user's message. Only offer advice or exercises if the user seems to want it or if it feels appropriate. Never sound like a bot or checklist. Avoid medical advice or diagnosis. If someone is in crisis, gently encourage them to seek professional help. Your goal is to make the user feel truly heard and supported.`;

      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'provider-6/gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 300
      });
      reply = completion.choices[0].message.content;
    } catch (openaiErr) {
      console.error('OpenAI error:', openaiErr);
      reply = `I'm sorry, I'm having trouble connecting right now. Please try again in a moment, or consider reaching out to a mental health professional if you need immediate support.`;
    }

    res.json({ reply });
  } catch (err) {
    console.error('Chatbot error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router; 