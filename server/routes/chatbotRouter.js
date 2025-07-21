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
      const systemPrompt = `You are Tony, a compassionate mental health assistant. Your role is to:

1. ANALYZE the emotional tone of the user's message
2. SUGGEST ONE specific area for improvement or growth
3. RECOMMEND a simple, practical mind exercise or piece of advice

Guidelines:
- Be warm, empathetic, and supportive
- Keep your response concise but meaningful (2-3 paragraphs max)
- Focus on actionable, practical advice
- Use a gentle, encouraging tone
- Avoid medical advice or diagnosis
- If someone is in crisis, encourage them to seek professional help

Format your response like this:
"Tone Analysis: [Brief analysis of their emotional state]

Area for Growth: [One specific, gentle suggestion for improvement]

Mind Exercise/Advice: [A simple, practical exercise or piece of advice they can try right now]"

Remember: You're here to support and guide, not to fix or solve everything.`;

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