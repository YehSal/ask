module.exports = (req, res, next) => {
  if (!req.user.role === 2) {
    return res.status(401).send({ error: 'You must be a student' });
  }

  next();
};
