import { Request, Response } from 'express';

export class SignOut {
  public async update(req: Request, res: Response): Promise<void> {
   res.send('salida con exito');
  }
}
