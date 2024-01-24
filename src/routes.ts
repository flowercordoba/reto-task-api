/* eslint-disable @typescript-eslint/no-unused-vars */

import { authRoutes } from '@auth/routes/auth.routes';
import { currentUserRoutes } from '@auth/routes/currentRoutes';
import { authMiddleware } from '@middleware/auth-middleware';
import { taskRoutes } from '@task/routes/task.routes';
import { userRoutes } from '@user/routes/userRoutes';
import { Application } from 'express';
import { notificacionRoutes } from './feature/notificacion/routes/notification.routes';

const BASE_PATH = '/api';

export default (app: Application) => {
  const routes = () => {
    app.use(BASE_PATH, authRoutes);
    app.use(BASE_PATH, authMiddleware.verifyUser, currentUserRoutes.routes());
    app.use(BASE_PATH, authMiddleware.verifyUser, userRoutes.routes());
    app.use(BASE_PATH, authMiddleware.verifyUser, notificacionRoutes.routes());
    app.use(BASE_PATH, authMiddleware.verifyUser, taskRoutes.routes());
  };
  routes();
};
