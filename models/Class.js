const mongoose = require('mongoose');
const { Schema } = mongoose;
const QuestionSchema = require('./Question');

/*
 * TODO: still need to figure out how to keep track of the students who logged
 * into the class so they aren't allowed to vote on one question more than once
 */
const classSchema = new Schema({
  title: String,
  duration: Date,
  expired: Boolean,
  password: String,
  questions: [QuestionSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('classes', classSchema);
