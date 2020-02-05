import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import UserController from "./app/controllers/user.controller";
import FileController from "./app/controllers/file.controller";
import SessionController from "./app/controllers/session.controller";
import authMiddleware from "./app/middlewares/auth";
const routes = new Router();
const upload = multer(multerConfig);

routes.post("/create", UserController.store);
routes.post("/sessions", SessionController.session);

routes.use(authMiddleware);
routes.put("/update", UserController.update);
routes.post("/files", upload.single("file"), FileController.store);
// routes.post("/files", upload.single("file"), (req, res) => {
//   res.json({ ok: true });
// });
export default routes;
