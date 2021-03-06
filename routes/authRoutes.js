const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
  /**
   * Handle request to google oauth
   */
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  /**
   * Handle request when user is redirected back to our website
   * Redirect to /courses after passport authenticates and google approves
   * the code
   */
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  /*
   * Logout route
   */
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  /*
   * Redirect when user is logged in
   */
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  /*
   * Fetch user by ID
   */
  app.get('/api/user/:id', async (req, res) => {
    try {
      user = await User.findById(req.params.id);
      res.send(req.user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post('/api/current_user/role/:role', async (req, res) => {
    const { role } = req.params;
    var user = req.user;

    // 1: User is a professor
    // 2: User is a student
    if (role === '1') {
      user.role = 1;
    } else if (role === '2') {
      user.role = 2;
    }

    try {
      await user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
