import { Request, Response } from "express";
import { AgentService } from "./index";

export default class DenouncementController {
  public static async create(req: Request, res: Response) {
    return AgentService.create(req.body)
      .then((rs) => res.status(201).json(rs).send())
      .catch((err) => res.status(400).json({ error: err.message }));
  }

  public static async findAll(req: Request, res: Response) {
   try {
    const resultGetAll = await AgentService.findAll()
    return res.status(200).json(resultGetAll)
   } catch (error) {
    return res.status(500).json({ error: error.message })
   }
  }

  public static async findById(req: Request, res: Response) {
    return AgentService.findById(req.params.id)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  }

  public static async update(req: Request, res: Response) {
    try {
      const resultUpdate = await AgentService.update( req.params.id, req.body )
      return res.status(200).json(resultUpdate)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  public static async delete(req: Request, res: Response) {
    return AgentService.delete(req.params.id)
      .then(() => res.status(204).send())
      .catch((err) => res.status(400).json({ error: err.message }));
  }
}
