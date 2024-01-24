import express, { Router } from 'express';
import { NotiGetController } from '../controllers/get-task';

class NotificacionRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/notificaciones', new NotiGetController().getNotif);
    this.router.get('/notificaciones/:id', new NotiGetController().getNotiById);
    this.router.delete('/delete', new NotiGetController().deleteNoti);

    return this.router;
  }
}

export const notificacionRoutes: NotificacionRoutes = new NotificacionRoutes();
