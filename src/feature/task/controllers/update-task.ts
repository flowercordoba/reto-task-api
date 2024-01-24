
import { CustomError } from '@root/shared/utils';
import { taskService } from '@service/task.service';
import { Request, Response } from 'express';
export class TaskUpdateController {

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error' });
  };
  updateTask = async (req: Request, res: Response) => {
    const updateTask = await taskService.getTaskUpdate();
    res.json({ ok: true, updateTask });
  };

  deleteTask = async (req: Request, res: Response) => {
    const deleteTask = await taskService.getTaskDelete();
    res.json({ ok: true, deleteTask });
  };
}
