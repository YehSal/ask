const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Class = mongoose.model('classes');

module.exports = app => {
  app.post('/api/classes', requireLogin, (req, res) => {
    const { title, duration, password } = req.body;

    const class = new Class({
      title,
      duration,
      password,
      _user: req.user.id
    });

    class.save();
  });
};
