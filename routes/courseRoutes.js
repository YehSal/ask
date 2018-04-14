const mongoose = require('mongoose');
const _ = require('lodash');
var moment = require('moment-timezone');
const requireLogin = require('../middlewares/requireLogin');
const requireProfessor = require('../middlewares/requireProfessor');
const Course = mongoose.model('courses');

module.exports = app => {
  /*
   * Fetch all courses that belong to the user
   * Only professors have this privilege
   */
  app.get('/api/courses', requireLogin, requireProfessor, async (req, res) => {
    const courses = await Course.find({ _user: req.user.id });

    res.send(courses);
  });

  /*
   * Fetch a course given ID
   * Only professor have this privilege
   */
  app.get('/api/course/:id', requireLogin, requireProfessor, async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (!_.some(course.participants, req.user._id)) {
      course.participants.push(req.user._id);
      course.participants = _.uniqBy(course.participants);
    }

    try {
      await course.save();
      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });


  /*
   * Create a new course
   * Only professor have this privilege
   */
   app.post('/api/courses', requireLogin, requireProfessor, async(req, res) => {
    const { courseTitle, courseDuration } = req.body;
    var [hour, min] = courseDuration.split(':');
    const instructorName = req.user.firstName + ' ' + req.user.lastName;
    const expirationDate = moment();

    expirationDate
      .add(hour, 'hours')
      .add(min, 'minutes')
      .toDate();

    const course = new Course({
      title: courseTitle,
      instructorName,
      _user: req.user.id,
      expirationDate
    });

    try {
      await course.save();
      res.send(course);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  /*
   * Delete a course
   * Only professor have this privilege
   */
  app.delete('/api/course/:id', requireLogin, requireProfessor, async (req, res) => {
    try {
      await Course.findByIdAndRemove(req.params.id);
      res.send({
        message: 'Course successfully deleted',
        id: req.params.id
      });
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Find course given password
  app.get('/api/course/joinCourse/:password', requireLogin, async(req, res) => {
    const course = await Course.findOne({ password: req.params.password });

    try {
      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
