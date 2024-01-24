
import express, { Express } from 'express';
import { TastServer } from './server';

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: TastServer = new TastServer(app);
    server.start();

  }
}

const application: Application = new Application();
application.initialize();
