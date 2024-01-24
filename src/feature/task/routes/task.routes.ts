import { TaskController } from '@task/controllers/create-task';
import { TaskGetController } from '@task/controllers/get-task';
import { TaskUpdateController } from '@task/controllers/update-task';
import express, { Router } from 'express';

class TaskRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.post('/create-task', new TaskController().createTask);
    this.router.post('/send-task', new TaskController().sendTask);
    this.router.get('/task', new TaskGetController().getTask);
    this.router.get('/task/:id', new TaskGetController().getTaskById);
    this.router.put('/task-update', new TaskUpdateController().updateTask);
    this.router.delete('/task-update', new TaskUpdateController().deleteTask);

    return this.router;
  }
}

export const taskRoutes: TaskRoutes = new TaskRoutes();
