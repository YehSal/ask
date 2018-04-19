const mongoose = require('mongoose');
const Course = mongoose.model('courses');

module.exports = io => {
  io.on('connection', socket => {
    console.log('New user connected: ' + socket.id);

    socket.on('disconnect', () => {
      console.log('User was disconnected');
    });

    socket.on('course', data  => {
      socket.join(data.courseID);
    });

    socket.on('leave course', data => {
      socket.leave(data.courseID);
    });

    socket.on('questions:change', data => {
      socket.broadcast.emit('questions:changed', data);
    });
  });
};
