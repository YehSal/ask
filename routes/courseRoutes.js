const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Course = mongoose.model('courses');

module.exports = app => {
  app.get('/api/courses', requireLogin, async (req, res) => {
    const courses = await Course.find({ _user: req.user.id });

    res.send(courses);
  });

  app.get('/api/course/:id', requireLogin, async (req, res) => {
    const course = await Course.findById(req.params.id);

    res.send(course);
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

  app.post('/api/course/:id/questions', requireLogin, async(req, res) => {
    const { values, courseID } = req.body.params;
    const course = await Course.findById(courseID);

    const question = {
      body: values.questionBody
    };

    course.questions.push(question);

    try {
      await course.save();
      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
