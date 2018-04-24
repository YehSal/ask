const mongoose = require('mongoose');
const { Schema } = mongoose;
const QuestionSchema = require('./Question');
const randomstring = require('randomstring');
const moment = require('moment');

/*
 * TODO: still need to figure out how to keep track of the students who logged
 * into the course so they aren't allowed to vote on one question more than once
 * TODO: remove default expiration date and require the user to determine it
 */
const courseSchema = new Schema({
  title: String,
  instructorName: String,
  expirationDate: {
    type: Date,
    default: moment().toDate()
  },
  password: {
    type: String,
    default: randomstring.generate({
      length: 5,
      readable: true,
      charset: 'alphanumeric'
    })
  },
  questions: [QuestionSchema],
  participants: [Schema.Types.ObjectId],
  sentQuestions: {
    type: Boolean,
    default: false
  },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('courses', courseSchema);
