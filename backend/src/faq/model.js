const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  answer: {
    type: String,
    required: true,
    unique: false,
  },
  count: {
    type: Number,
    default: 0
  },
  video:{
    type: String,
    required: false
  }
});

const faqModel = mongoose.model("Faq", faqSchema);

module.exports = faqModel;
