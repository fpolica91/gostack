import { Router } from "express";
import User from "./app/models/User";
const routes = new Router();

routes.get("/", async (req, res) => {
  try {
    const user = await User.create({
      name: "Fabricio",
      email: "fabricio@gmail.com",
      password_hash: "1234",
      provider: true
    });
    return res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

export default routes;
