const jwt = require('jsonwebtoken');

module.exports.authenticateUser = (req, res, next) => {
  // console.log('ive received a request', req.path)
  // Skip authentication for the login page
  if (req.path === '/login' || req.path === '/login-user' ||
      req.path === '/signup' || req.path === '/signup-user') {
    return next();
  }
  if (!req.path) {
    console.log('req.path is null, !req.path is the culprit')
    return res.redirect('/')
  }

  // const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  // const cookie = req.cookies.token && req.cookies.token;
  // console.log('cookies', req.cookies.token)
  const token = req.cookies.token
  if (!token) {
    console.log('token is null, !token is the culprit')
    return res.redirect('/');
  }
  // console.log(req.path, token)



  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user_id = decodedToken.id;
    next();
  } catch (error) {
    console.log('there was an error after decoding, so go to login', error)
    return res.redirect('/');
  }
};

