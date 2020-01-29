import { Router } from "express";
import User from "./app/models/User";
const routes = new Router();

routes.get("/", async (req, res, next) => {
  const user = await User.create({
    name: "fabricio",
    email: "fabricio@fabricio.com",
    password_hash: "1234"
  });
  return res.json(user);
});

export default routes;
