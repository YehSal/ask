/*
 * questionRoutes has all the backend routes related to voting. Questions are a
 * subdocument of courses and therefore courseIDs are necessary to find questions
 */
const mongoose = require('mongoose');
const _ = require('lodash');
var moment = require('moment-timezone');
const requireLogin = require('../middlewares/requireLogin');
const Course = mongoose.model('courses');

module.exports = app => {
  /*
   * Upvote a question
   * Users can't vote on their own questions
   * Users can only vote once on others' questions
   */
   // TODO: Uncomment the part that disallows students to vote on their own questions
  app.post('/api/course/:courseID/question/:questionID/upVote', requireLogin, async(req, res) => {
    const { courseID, questionID } = req.params;
    const course = await Course.findById(courseID);
    const question = course.questions.find(question => question._id == questionID)

    // if (_.isEqual(question._user, req.user._id)) {
    //   res.status(401).send({ error: "You can't vote on your own question" });
    // }

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

  /*
   * Downvote a question
   * Same logic as upvoting
   */
   app.post('/api/course/:courseID/question/:questionID/downVote', requireLogin, async(req, res) => {
    const { courseID, questionID } = req.params;
    const course = await Course.findById(courseID);
    const question = course.questions.find(question => question._id == questionID)

    // if (_.isEqual(question._user, req.user._id)) {
    //   res.status(401).send({ error: "You can't vote on your own question" });
    // }

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

  // Create a question
  app.post('/api/course/:id/questions', requireLogin, async(req, res) => {
    const { values } = req.body.params;
    const courseID  = req.params.id;
    const course = await Course.findById(courseID);
    const question = {
      body: values.questionBody,
      _user: req.user.id,
    };

    course.questions.push(question);

    try {
      await course.save();
      res.send(course);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  /*
   * Delete a question
   * Professors can delete any question, students can only delete their own questions
   */
  app.delete('/api/course/:courseID/question/:questionID', requireLogin, async (req, res) => {
    const { courseID, questionID } = req.params;
    const course = await Course.findById(courseID);
    const question = course.questions.find(question => question._id == questionID)

    if (req.user.role == 2) {
      if (!_.isEqual(req.user._id, question._user)) {
        return res.status(401).send({ error: "You can only delete your questions" });
      }
    }

    course.questions = course.questions.filter(question => question._id != req.params.questionID);

    try {
      course.save();
      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  /*
   * Update a question
   * Professors can update any question, students can only update their own questions
   */
  app.put('/api/course/:courseID/question/:questionID', requireLogin, async (req, res) => {
    const { courseID, questionID } = req.params;
    const course = await Course.findById(courseID);
    var question = course.questions.find(question => question._id == questionID)
    const values = req.body.params.values;

    if (req.user.role == 2) {
      if (!_.isEqual(req.user._id, question._user)) {
        return res.status(401).send({ error: "You can only update your questions" });
      }
    }

    question.body = values.questionBody;

    try {
      course.save();
      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
