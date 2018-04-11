/*
 * questionRoutes has all the backend routes related to voting. Questions are a
 * subdocument of courses and therefore courseIDs are necessary to find questions
 */
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const _ = require('lodash');
var moment = require('moment-timezone');

const Course = mongoose.model('courses');

module.exports = app => {
  // TODO: Send appropriate errors for upvote and downvote, user can't vote on his/her question
  app.post('/api/course/:courseID/question/:questionID/upVote', requireLogin, async(req, res) => {
    const { courseID, questionID } = req.params;
    const course = await Course.findById(courseID);
    const question = course.questions.find(question => question._id == questionID)

    // Send an error to the user that they can't upvote a question they posted
    // if (question._user == req.user._id) {
    //   res.send(course);
    // }

    // User already upvoted
    if (_.some(question.usersUpVoted, req.user._id)) {
      res.send(course);
    }

    if (_.some(question.usersDownVoted, req.user._id)) {
      question.downVote -= 1;
      question.usersDownVoted.pop(req.user._id);
    }

    question.upVote += 1;
    question.usersUpVoted.push(req.user._id);

    try {
      await course.save();
      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/course/:courseID/question/:questionID/downVote', requireLogin, async(req, res) => {
    const { courseID, questionID } = req.params;
    const course = await Course.findById(courseID);
    const question = course.questions.find(question => question._id == questionID)

    // Send an error to the user that they can't upvote a question they posted
    // if (question._user == req.user._id) {
    //   res.send(course);
    // }

    // User already upvoted
    if (_.some(question.usersUpVoted, req.user._id)) {
      question.upVote -= 1;
      question.usersUpVoted.pop(req.user.id);
    }

    if (_.some(question.usersDownVoted, req.user._id)) {
      res.send(course);
    }

    question.downVote += 1;
    question.usersDownVoted.push(req.user._id);

    try {
      await course.save();
      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
