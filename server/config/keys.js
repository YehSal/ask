/*
 * Figures out which credentials to use based on dev/prod environment
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
