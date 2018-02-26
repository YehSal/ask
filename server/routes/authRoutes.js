const passport = require('passport');

module.exports = app => {
  /**
   * Handle request to google oauth
   */
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  /**
   * Handel request when user is redirected back to our website
   */
  app.get('/auth/google/callback', passport.authenticate('google'));

  /*
   * Log out route
   */
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  /*
   * Redirect when user is logged in
   */
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
