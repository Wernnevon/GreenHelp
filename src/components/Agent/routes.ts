import { Router } from "express";

import { AgentController } from "./index";

const routes = Router();

routes.post("/", AgentController.create);

routes.get("/",AgentController.findAll);

routes.get("/:id",AgentController.findById);

routes.put("/:id", AgentController.update);

routes.delete("/:id", AgentController.delete);

export default routes;
