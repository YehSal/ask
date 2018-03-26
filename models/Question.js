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
  usersUpVoted: { type: [Schema.Types.ObjectId] },
  usersDownVoted: { type: [Schema.Types.ObjectId] },
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = questionSchema;
