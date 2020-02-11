import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import SessionController from "./app/controllers/session.controller";
import RecipientController from "./app/controllers/admin.handler";
import FileController from "./app/controllers/file.controller";
import authMiddleware from "./app/middlewares/auth";
const routes = new Router();
const upload = multer(multerConfig);

routes.post("/sessions", SessionController.session);

routes.use(authMiddleware);
routes.post("/files", upload.single("file"), FileController.store);

routes.post("/recipient", RecipientController.store);
routes.put("/update/:id", RecipientController.update);
export default routes;
