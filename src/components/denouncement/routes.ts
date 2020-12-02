import { Router } from "express";

import { DenouncementController } from "./index";

const routes = Router();

routes.post("/", DenouncementController.create);

routes.get("/",DenouncementController.findAll);

routes.get("/:id",DenouncementController.findById);

routes.put("/:id", DenouncementController.update);

routes.delete("/:id", DenouncementController.delete);

export default routes;
