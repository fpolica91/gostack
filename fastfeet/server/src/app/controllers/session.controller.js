import jwt from "jsonwebtoken";
import User from "../models/User";

class SessionController {
  async session(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) res.status(401).json({ err: "User not found" });
    if (!(await user.checkPassword(password))) {
      res.status(401).json({ err: "incorrect password" });
    }
    const { name, id } = user;
    return res.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, "cheesireCat", {
        expiresIn: "7d"
      })
    });
  }
}

export default new SessionController();
