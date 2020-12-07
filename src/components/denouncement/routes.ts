import { Router } from "express";

import { DenouncementController, DenouncementMiddleware } from "./index";
const routes = Router();

routes.post("/", DenouncementMiddleware.filterBody, DenouncementController.create);

routes.get("/", DenouncementMiddleware.filterFindAll, DenouncementController.findAll);

routes.get("/:id", DenouncementMiddleware.filterFindAll, DenouncementMiddleware.filterIdExists, DenouncementController.findById);

routes.put("/:id", DenouncementMiddleware.filterUpdate, DenouncementMiddleware.filterIdExists, DenouncementController.update);

routes.delete("/:id", DenouncementMiddleware.filterFindAll, DenouncementMiddleware.filterIdExists, DenouncementController.delete);

export default routes;
