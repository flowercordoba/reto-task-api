import { Router } from 'express';
import { RegisterController } from '@auth/controllers/signup';
import { LoginController } from '@auth/controllers/signin';
import { SignOut } from '@auth/controllers/signout';
import { AuthService } from '@service/auth.service'; // Asegúrate de que la ruta de importación sea correcta.

class AuthRoutes {
  public router: Router;
  private authService: AuthService;

  constructor() {
    this.router = Router();
    this.authService = new AuthService();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/auth/register', new RegisterController(this.authService).Register);
    this.router.post('/auth/login', new LoginController().Login); // Asume que LoginController tiene una estructura similar
    this.router.get('/auth/signout', new SignOut().update); // Asume que SignOut no necesita AuthService
  }
}

export const authRoutes = new AuthRoutes().router; // Exporta directamente el router configurado
