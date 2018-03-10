const mongoose = require('mongoose');
const { Schema } = mongoose;
var randomstring = require('randomstring');
const QuestionSchema = require('./Question');

/*
 * TODO: still need to figure out how to keep track of the students who logged
 * into the course so they aren't allowed to vote on one question more than once
 */
const courseSchema = new Schema({
  title: String,
  expirationDate: Date,
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
