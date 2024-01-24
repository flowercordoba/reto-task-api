import express, { Express } from 'express';
import { TastServer } from './server';
import databaseConnection from './data/setupDatabase';

class Application {
  public initialize(): void {
    const app: Express = express();
    databaseConnection();
    const server: TastServer = new TastServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
