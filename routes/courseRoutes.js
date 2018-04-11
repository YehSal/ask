const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const _ = require('lodash');
var moment = require('moment-timezone');

const Course = mongoose.model('courses');

module.exports = app => {
  app.get('/api/courses', requireLogin, async (req, res) => {
    const courses = await Course.find({ _user: req.user.id });

    res.send(courses);
  });

  app.get('/api/course/:id', requireLogin, async (req, res) => {
    const course = await Course.findById(req.params.id);

    //TODO: fetchQuestions and clicking a course trigger the same route
    if (!_.some(course.participants, req.user._id)) {
      course.participants.push(req.user._id);
      course.participants = _.uniqBy(course.participants); // Ensures no duplicates because of firing route twice
    }

    try {
      await course.save();
      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/courses', requireLogin, async(req, res) => {
    const { courseTitle, courseDuration } = req.body;
    var [hour, min] = courseDuration.split(':');
    const expirationDate = moment();

    expirationDate
      .add(hour, 'hours')
      .add(min, 'minutes')
      .toDate();

    const instructorName = req.user.firstName + ' ' + req.user.lastName;
    const course = new Course({
      title: courseTitle,
      instructorName: instructorName,
      _user: req.user.id,
      expirationDate
    });

    try {
      await course.save();
      const user = await req.user.save();

      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/course/:id/questions', requireLogin, async(req, res) => {
    const { values } = req.body.params;
    const courseID  = req.params.id;
    const course = await Course.findById(courseID);
    const question = {
      body: values.questionBody,
      _user: req.user.id
    };

    course.questions.push(question);

    try {
      await course.save();
      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get('/api/course/joinCourse/:password', requireLogin, async(req, res) => {
    const course = await Course.findOne({ password: req.params.password });

    try {
      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
