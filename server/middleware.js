const jwt = require('jsonwebtoken');

module.exports.authenticateUser = (req, res, next) => {
  console.log('ive received a request', req.path)
  // Skip authentication for the login page
  if (req.path === '/login' || req.path === '/login-user' ||
      req.path === '/signup' || req.path === '/signup-user') {
    return next();
  }
  if (!req.path) {
    console.log('req.path is null')
    return res.redirect('/login')
  }

  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    console.log('token is null')
    return res.redirect('/login');
  }
  console.log(token)

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedToken.id;
    next();
  } catch (error) {
    console.log('there was an error after decoding, so go to login')
    return res.redirect('/login');
  }
};