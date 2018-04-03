const schedule = require('node-schedule');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const keys = require('../config/keys');

const Course = mongoose.model('courses');
const User = mongoose.model('users');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: keys.nodemailerUser,
    pass: keys.nodemailerPass
  }
});


//TODO: Use templates instead of building html here
schedule.scheduleJob('36 * * * *', async () => {
  //TODO: add sentQuestions as a restriction
  const expiredCourses = await
    Course
      .where('expirationDate').lt(new Date());

  expiredCourses.forEach((course) => {
    var html = '<h1>Questions for ' + course.title + '</h1>';

    course.questions.forEach((question) => {
      html += '<p>' + question.body + '</p>'
    });

    course.participants.forEach(async (participantID) => {
        participant = await User.findById(participantID);

        // TODO: Need to fix the email column in the user table
        const mailOptions = {
          from: 'QME',
          to: '',
          subject: 'Hello',
          text: 'Hello World',
          html: html
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error)
            return console.log(error);

          console.log('Message sent: %s', info.messageId);
      });
    });
    course.sentQuestions = true;
  });
});
