const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
  googleId: String,
  email: String,
  firstName: String,
  lastName: String,
  role: {
    type: Number,
    default: 0
  }
});


mongoose.model('users', userSchema);
