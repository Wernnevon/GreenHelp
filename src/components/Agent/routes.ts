import { Router } from "express";

import { AgentController, AgentMiddleware } from "./index";

const routes = Router();

routes.post("/", AgentMiddleware.filterBody, AgentController.create);

routes.get("/", AgentMiddleware.filterFindAll, AgentMiddleware.filterIdExists, AgentController.findAll);

routes.get("/:id", AgentMiddleware.filterFindAll, AgentMiddleware.filterIdExists, AgentController.findById);

routes.put("/:id", AgentMiddleware.filterUpdate, AgentMiddleware.filterIdExists, AgentController.update);

routes.delete("/:id", AgentMiddleware.filterFindAll, AgentMiddleware.filterIdExists, AgentController.delete);

export default routes;
