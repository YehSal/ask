const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
  body: String,
  upVote: {
    type: Number,
    default: 0
  },
  downVote: {
    type: Number,
    default: 0
  },
});

module.exports = questionSchema;
