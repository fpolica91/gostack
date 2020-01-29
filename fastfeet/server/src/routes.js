import { Router } from "express";
import SessionController from "./app/controllers/session.controller";
import RecipientController from "./app/controllers/admin.handler";
import authMiddleware from "./app/middlewares/auth";
const routes = new Router();

routes.post("/sessions", SessionController.session);

routes.use(authMiddleware);

routes.post("/recipient", RecipientController.store);
routes.put("/update/:id", RecipientController.update);
export default routes;
