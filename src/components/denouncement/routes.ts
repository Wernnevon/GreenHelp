import multer  from 'multer';
import { Router } from "express";

import { DenouncementController, DenouncementMiddleware } from "./index";
import uploadConfig from "../config/upload";

const routes = Router();
const uploadMulter = multer(uploadConfig);

routes.post("/",
uploadMulter.array("image"),
DenouncementMiddleware.filterIdValidate,
DenouncementController.create);

routes.get("/", DenouncementMiddleware.filterFindAll, DenouncementController.findAll);

routes.get("/:id", DenouncementMiddleware.filterFindAll, DenouncementMiddleware.filterIdExists, DenouncementController.findById);

routes.put("/:id", DenouncementMiddleware.filterUpdate, DenouncementMiddleware.filterIdExists, DenouncementController.update);

routes.delete("/:id", DenouncementMiddleware.filterDelete, DenouncementMiddleware.filterBody, DenouncementMiddleware.filterIdExists, DenouncementController.delete);

export default routes;
