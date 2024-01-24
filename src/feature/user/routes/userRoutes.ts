import { Get } from '@user/controllers/get-profile';
import { Search } from '@user/controllers/search-user';
import express, { Router } from 'express';

class UserRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/user/all/:page', new Get().all);
    this.router.get('/user/profile', new Get().profile);
    this.router.get('/user/profile/:userId', new Get().profileByUserId);
    this.router.get('/user/profile/search/:query', new Search().user);
    this.router.put('/user/update/:id', new Search().userUpdate);

    return this.router;
  }
}

export const userRoutes: UserRoutes = new UserRoutes();
