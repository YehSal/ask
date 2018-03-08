const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
  body: String,
  upVote: Number,
  downVote: Number,
});

module.exports = questionSchema;
