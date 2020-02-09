import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import UserController from "./app/controllers/user.controller";
import FileController from "./app/controllers/file.controller";
import ProviderController from "./app/controllers/provider.controller";
import SessionController from "./app/controllers/session.controller";
import ScheduleController from "./app/controllers/schedule.controller";
import AppointmentController from "./app/controllers/appointment.controller";
import authMiddleware from "./app/middlewares/auth";
const routes = new Router();
const upload = multer(multerConfig);

routes.post("/create", UserController.store);
routes.post("/sessions", SessionController.session);

routes.use(authMiddleware);
routes.put("/update", UserController.update);
routes.post("/files", upload.single("file"), FileController.store);
routes.get("/providers", ProviderController.index);
routes.post("/appointments", AppointmentController.store);
routes.get("/appointments", AppointmentController.index);

// providers
routes.get("/schedule", ScheduleController.index);

export default routes;
