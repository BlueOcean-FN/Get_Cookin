const jwt = require('jsonwebtoken');

module.exports.authenticateUser = (req, res, next) => {
  if (req.path === '/login' || req.path === '/login-user' ||
      req.path === '/signup' || req.path === '/signup-user') {
    return next();
  }
  if (!req.path) {
    console.log('req.path is null, !req.path is the culprit')
    return res.redirect('/')
  }

  let token = req.cookies && req.cookies.token;
  if (!token) token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    console.log('token is null, !token is the culprit')
    return res.redirect('/');
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user_id = decodedToken.id;
    next();
  } catch (error) {
    console.log('there was an error after decoding, so go to login')
    return res.redirect('/');
  }
};

