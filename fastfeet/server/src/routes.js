import { Router } from "express";
import SessionController from "./app/controllers/session.controller";
const routes = new Router();

routes.post("/sessions", SessionController.session);

export default routes;
