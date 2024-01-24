import { Request, Response, NextFunction } from 'express';

class AuthMiddleware {
  public verifyUser(req: Request, _res: Response, next: NextFunction): void {
    console.log('paso por verifyUser');
    next(); // Esto asegurará que la solicitud continúe
  }

  public checkAuthentication(req: Request, _res: Response, next: NextFunction): void {
    console.log('paso por checkAuthentication');
    next(); // Esto asegurará que la solicitud continúe
  }
}

export const authMiddleware: AuthMiddleware = new AuthMiddleware();
