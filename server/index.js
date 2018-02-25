const express = require('express');
require('./services/passport');


const path = require('path');
const http = require('http');
const socketIO = require('socket.io')

const PUBLICPATH = path.join(__dirname, '../client/public');
const PORT = process.env.PORT || 5000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

/*
 * Handle routes
 * require will return a function that we just pass app to as an argument
 */
require('./routes/authRoutes')(app);

server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
