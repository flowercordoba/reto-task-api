/* eslint-disable @typescript-eslint/no-unused-vars */

import { authRoutes } from '@auth/routes/auth.routes';
import { currentUserRoutes } from '@auth/routes/currentRoutes';
import { taskRoutes } from '@task/routes/task.routes';
import { Application } from 'express';
import { notificacionRoutes } from './feature/notificacion/routes/notification.routes';
import { AuthMiddleware } from '@middleware/auth-middleware';
import { userRoutes } from '@user/routes/userRoutes';
import { GitRoutes } from './feature/github/routes';

const BASE_PATH = '/api';

export default (app: Application) => {
  const routes = () => {
    app.use(BASE_PATH, authRoutes);
    app.use(BASE_PATH, GitRoutes.routes);
    app.use(BASE_PATH, AuthMiddleware.validateJWT, currentUserRoutes.routes());
    app.use(BASE_PATH, AuthMiddleware.validateJWT, notificacionRoutes.routes());
    app.use(BASE_PATH, AuthMiddleware.validateJWT, taskRoutes.routes());
    app.use(BASE_PATH, AuthMiddleware.validateJWT, userRoutes.routes());
  };
  routes();
};
