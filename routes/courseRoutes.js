const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Course = mongoose.model('courses');

module.exports = app => {
  app.get('/api/courses', requireLogin, async (req, res) => {
    const courses = await Course.find({ _user: req.user.id });

    res.send(courses);
  });

  app.post('/api/courses', requireLogin, async(req, res) => {
    const { courseTitle } = req.body;
    const course = new Course({
      title: courseTitle,
      _user: req.user.id
    });

    try {
      await course.save();
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
