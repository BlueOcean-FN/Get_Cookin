const jwt = require('jsonwebtoken');

module.exports.authenticateUser = (req, res, next) => {
  if (req.path === '/login' || req.path === '/login-user' ||
      req.path === '/signup' || req.path === '/signup-user') {
    return next();
  }
  if (!req.path) {
    return res.redirect('/')
  }

  let token = req.cookies && req.cookies.token;
  if (!token) token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.redirect('/');
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user_id = decodedToken.id;
    next();
  } catch (error) {
    return res.redirect('/');
  }
};

