import { Request, Response, NextFunction, json } from "express";
import { DenouncementService } from ".";

export default class DenouncementMiddleware {
  public static async filterBody(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
      this.filterIdValidate(req, res, next);
      const denouncementContent = req.body;
    if(!(denouncementContent.image && denouncementContent.description && denouncementContent.latitude && denouncementContent.longitude && denouncementContent.code)){
      return res.status(400).send('Dados insuficientes')
    }
    next();
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
      const denouncimentState = DenouncementService.findById(req.params.id)
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
    //   veifica se o code está disponível para uso
      const denouncimentState = DenouncementService.findById(req.body.code)
      if(denouncimentState){
        return res.status(400).send('Requisição não pode ser concluída, porque o ID já está em uso')
      }
    
    next();
  }
  public static async filterUpdate(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const denouncementContent = req.body;
    if(!(denouncementContent.feedback && denouncementContent.status)){
      return res.status(406).send('Conteúdo não válido para os parametros do servidor')
    }
    next();
  }
}
