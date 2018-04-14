module.exports = (req, res, next) => {
  if (!req.user.role === 1) {
    return res.status(401).send({ error: 'You must be a professor' });
  }

  next();
};
