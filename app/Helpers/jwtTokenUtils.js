const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

exports.signToken = (userId, userEmail, isAdmin)=> {
  const key = process.env.SECRET_KEY;
  const token = jwt.sign({ id: userId, email: userEmail, admin: isAdmin }, key, { expiresIn: '1h' });
  return token;
}

exports.verifyToken = (req, res, next) => {
  const key = process.env.SECRET_KEY;
  const token = req.headers.authorization || req.params.token;
  if (!token) {
    res.status(403).send({ message: 'No token provided' });
  }else{
    jwt.verify(token, key, (error, decoded) => {
      if (error) {
        res.status(401).send({ message: 'Invalid token provided' });
      }
      req.decoded = decoded;
      next();
    });
  }
  
}

