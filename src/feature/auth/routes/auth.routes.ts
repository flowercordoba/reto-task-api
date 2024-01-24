// import { LoginController } from '@auth/controllers/signin';
import { SignOut } from '@auth/controllers/signout';
// import { RegisterController } from '@auth/controllers/signup';
import { LoginController } from '@auth/controllers/signin';
import { RegisterController } from '@auth/controllers/signup';
import express, { Router } from 'express';

class AuthRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.post('/auth/register', new RegisterController().Register);
    this.router.post('/auth/login', new LoginController().Login);
    return this.router;
  }

  public signoutRoute(): Router {
    this.router.get('/signout', SignOut.prototype.update);

    return this.router;
  }
}

export const authRoutes: AuthRoutes = new AuthRoutes();
