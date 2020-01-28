import { Router } from "express";
import UserController from "./app/controllers/user.controller";
import SessionController from "./app/controllers/session.controller";
import authMiddleware from "./app/middlewares/auth";
const routes = new Router();

routes.post("/create", UserController.store);
routes.post("/sessions", SessionController.session);

routes.use(authMiddleware);
routes.put("/update", UserController.update);
export default routes;
