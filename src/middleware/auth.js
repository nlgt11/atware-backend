import jwt from 'jsonwebtoken';

const { JWT_KEY } = process.env;

export default (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.decode(token, JWT_KEY);
    req.user = decoded.user;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token is not valid' });
  }
};