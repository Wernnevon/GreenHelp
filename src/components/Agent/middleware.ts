import { Request, Response, NextFunction } from "express";
import { AgentService } from "./index";

export default class AgentMiddleware {
  public static async filterBody(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      this.filterIdValidate(req, res, next);
      const agentContent = req.body;
    if(!(agentContent.image && agentContent.description && agentContent.latitude && agentContent.longitude && agentContent.code)){
      return res.status(400).send('Dados insuficientes')
    }
    next();
      
    } catch (error) {
      console.log(error)
    }
  }
  public static async filterFindAll(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    if(!(req.body.constructor === Object && Object.keys(req.body).length === 0)) {
      return res.status(400).send('Esta requisição não deve conter dados');
    }
    next();
  }
  public static async filterIdExists(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
      const denouncimentState = await AgentService.findById(req.params.id)
      if(!denouncimentState){
        return res.status(404).send('Código não encontrado')
      }
    
    next();
  }
  public static async filterIdValidate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    //   veifica se o Numero de Inscrição do agente está disponível para uso
      const denouncimentState = await AgentService.findById(req.body.subsNumber)
      if(denouncimentState){
        return res.status(400).send('Requisição não pode ser concluída, porque o Numero de Inscrição do Agente já está em uso')
      }
    
    next();
  }
  public static async filterUpdate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const agentContent = req.body;
    if(!(agentContent.feedback && agentContent.status)){
      return res.status(406).send('Conteúdo não válido para os parametros do servidor')
    }
    next();
  }
}
