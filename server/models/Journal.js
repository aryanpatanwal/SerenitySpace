const mongoose = require('mongoose');

const JournalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true },
  sentiment: { 
    type: String, 
    enum: ['positive', 'negative', 'neutral', 'mixed'],
    default: 'neutral'
  },
  keywords: [{ type: String }],
  aiFeedback: { type: String },
  analysis: { type: String }, // for future mental health analysis
}, { timestamps: true });

module.exports = mongoose.model('Journal', JournalSchema); 