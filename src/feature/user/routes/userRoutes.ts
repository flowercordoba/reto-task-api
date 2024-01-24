import { authMiddleware } from '@middleware/auth-middleware';
import { Get } from '@user/controllers/get-profile';
import { Search } from '@user/controllers/search-user';
import express, { Router } from 'express';


class UserRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/user/all/:page', authMiddleware.checkAuthentication, new Get().all);
    this.router.get('/user/profile', authMiddleware.checkAuthentication,new Get().profile);
    this.router.get('/user/profile/:userId', authMiddleware.checkAuthentication,new Get().profileByUserId);
    this.router.get('/user/profile/search/:query', authMiddleware.checkAuthentication, new Search().user);
    this.router.put('/user/update/:id', authMiddleware.checkAuthentication, new Search().userUpdate);


    return this.router;
  }
}

export const userRoutes: UserRoutes = new UserRoutes();
