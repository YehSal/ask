const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Course = mongoose.model('courses');

module.exports = app => {
  app.post('/api/courses', requireLogin, (req, res) => {
    const { title, duration, password } = req.body;

    const course = new Course({
      title,
      duration,
      password,
      _user: req.user.id
    });

    course.save();
  });
};
