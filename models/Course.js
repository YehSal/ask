const mongoose = require('mongoose');
const { Schema } = mongoose;
const randomstring = require('randomstring');
const moment = require('moment');
const QuestionSchema = require('./Question');

/*
 * TODO: still need to figure out how to keep track of the students who logged
 * into the course so they aren't allowed to vote on one question more than once
 * TODO: remove default expiration date and require the user to determine it
 */
const courseSchema = new Schema({
  title: String,
  expirationDate: {
    type: Date,
    default: moment(new Date()).add(2, 'm').toDate()
  },
  password: {
    type: String,
    default: randomstring.generate({
      length: 7,
      readable: true,
      charset: 'alphanumeric'
    })
  },
  questions: [QuestionSchema],
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('courses', courseSchema);
