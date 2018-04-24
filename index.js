const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io')
const keys = require('./config/keys');

require('./models/User');
require('./models/Course');
require('./services/passport');

mongoose.connect(keys.mongoURI);

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
const PORT = process.env.PORT || 5000;

/*
 * Cookie configuration for authentication
 * @cookieSession pulls data from cookie
 * @passport pulls the user id out of the cookie data
 */
app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}))
app.use(passport.initialize());
app.use(passport.session());

/*
 * Handle routes
 * require will return a function that we just pass app to as an argument
 */
require('./routes/authRoutes')(app);
require('./routes/courseRoutes')(app);
require('./routes/questionRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets like our main.js file or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file if it doens't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

/*
 * Socket events/listeners
 */
require('./services/socket')(io);

server.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
