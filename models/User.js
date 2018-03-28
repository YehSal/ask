const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
  googleId: String,
  role: {
    type: Number,
    default: 0
  }
});


mongoose.model('users', userSchema);
