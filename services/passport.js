const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const _ = require('lodash');
const User = mongoose.model('users');

passport.serializeUser((user, done ) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user));
});

/*
 * Create a new user if there is no existing user with the same profile ID
 */
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID ,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  }, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
      return done(null, existingUser);
    }

    //TODO: Feature to edit profile for name, email, profile pic, etc.
    const user = await new User({
      googleId: profile.id,
      email: profile.emails[0].value,
      firstName: _.capitalize(profile.name.givenName),
      lastName: _.capitalize(profile.name.familyName)
    }).save()

    done(null, user);
  })
);
