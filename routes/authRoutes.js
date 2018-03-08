const passport = require('passport');

module.exports = app => {
  /**
   * Handle request to google oauth
   */
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  /**
   * Handle request when user is redirected back to our website
   * Redirect to /classes after passport authenticates and google approves
   * the code
   */
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/classes');
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
};
