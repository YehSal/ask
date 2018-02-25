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
};
