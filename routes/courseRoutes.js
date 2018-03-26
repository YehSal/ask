const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const _ = require('lodash');

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

  app.post('/api/course/:courseID/question/:questionID/reverseUpVote', requireLogin, async(req, res) => {
    const { courseID, questionID } = req.params;
    const course = await Course.findById(courseID);
    const question = course.questions.find(question => question._id == questionID)
    question.upVote -= 1;


    try {
      await course.save();
      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/course/:courseID/question/:questionID/reverseDownVote', requireLogin, async(req, res) => {
    const { courseID, questionID } = req.params;
    const course = await Course.findById(courseID);
    const question = course.questions.find(question => question._id == questionID)
    question.downVote -= 1;

    try {
      await course.save();
      res.send(course);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.get('/api/course/:courseID/question/:questionID/upVote', requireLogin, async(req, res) => {
    const { courseID, questionID } = req.params;
    const course = await Course.findById(courseID);
    const question = course.questions.find(question => question._id == questionID);

    if (_.some(question.usersUpVoted, req.user._id)) {
      res.send({
        userUpvoted: true,
        userDownvoted: false
      });
    } else if (_.some(question.usersDownVoted, req.user._id)) {
      res.send({
        userUpvoted: false,
        userDownvoted: true
      });
    } else if (_.some(question.usersUpVoted, req.user._id) && _.some(question.usersDownVoted, req.user._id)) {
      //TODO: should send an error
      res.send({
        userUpvoted: true,
        userDownvoted: true
      });
    } else {
      res.send({
        userUpvoted: false,
        userDownvoted: false
      });
    }
  });
};
