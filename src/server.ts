/* eslint-disable @typescript-eslint/no-unused-vars */
import 'express-async-errors';
import http from 'http';

import { Application, json, urlencoded } from 'express';
import cors from 'cors';
import applicationRoutes from '@root/routes';


const SERVER_PORT = 5000;
const link =['http://localhost:4200','https://demo-task-flower.netlify.app'];


export class TastServer {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public start(): void {
    this.securityMiddleware(this.app);
    this.standardMiddleware(this.app);
    this.routesMiddleware(this.app);

    this.startServer(this.app);
  }
  private securityMiddleware(app: Application): void {
    app.use(cors({
      origin: link,
      // origin: true,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
    }));
  }

  private standardMiddleware(app: Application): void {
  
    app.use(json({ limit: '200mb' }));
    app.use(urlencoded({ extended: true, limit: '200mb' }));
  }
  private routesMiddleware(app: Application): void {
    applicationRoutes(app);
  }

  private async startServer(app: Application): Promise<void> {
    try {
      const httpServer: http.Server = new http.Server(app);
      this.startHttpServer(httpServer);
    } catch (error) {
      console.log('error', 'Task startServer() error method:', error);
    }
  }
  private async startHttpServer(httpServer: http.Server): Promise<void> {
    try {
      httpServer.listen(SERVER_PORT, () => {
        console.info(`Server server running on port ${SERVER_PORT}`);
      });
    } catch (error) {
        console.log('error', 'Task startServer() error method:', error);
    }
  }

}
