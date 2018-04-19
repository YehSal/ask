/*
 * Contains all production keys -- commit this
 */
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
  nodemailerUser: process.env.NODEMAILER_USER,
  nodemailerPass: process.env.NODEMAILER_PASS
};
