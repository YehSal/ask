const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io')

const PUBLICPATH = path.join(__dirname, '../client/public');
const PORT = process.env.PORT || 5000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(PUBLICPATH));

io.on('connection', (socket) => {
  console.log('New user connected!');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
