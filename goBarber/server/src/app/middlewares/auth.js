import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";
import { promisify } from "util";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Token not provided" });
  const [, token] = authHeader.split(" ");

  try {
    // promisify is used to avoid using callbacks, promisify is part of nodejs
    // promisify(function to make promise)(callback to function)
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    // req.user is available in every route that comes after the middleware
    req.userId = decoded.id;
    return next();
  } catch (err) {
    res.status(401).json({ error: "Unexpected Error" });
  }
};
