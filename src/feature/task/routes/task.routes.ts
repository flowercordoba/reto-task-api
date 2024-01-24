import { TaskService } from '@service/task.service';
import { TaskController } from '@task/controllers/get-task';
// import { TaskGetController } from '@task/controllers/get-task';
// import { TaskUpdateController } from '@task/controllers/update-task';
import express, { Router } from 'express';

class TaskRoutes {
  private router: Router;
  private taskServices: TaskService;

  constructor() {
    this.router = express.Router();
    this.taskServices = new TaskService();
  }

  public routes(): Router {
    this.router.post('/create-task', new TaskController(this.taskServices).create);
    this.router.get('/task', new TaskController(this.taskServices).getTasks);
    this.router.get('/task/:id', new TaskController(this.taskServices).getTaskById);
    this.router.put('/task/:id', new TaskController(this.taskServices).edit);
    this.router.delete('/delete-task/:id', new TaskController(this.taskServices).delete);

    return this.router;
  }
}

export const taskRoutes: TaskRoutes = new TaskRoutes();
