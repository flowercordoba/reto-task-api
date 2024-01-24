
import { CustomError } from '@root/shared/utils';
import { taskService } from '@service/task.service';
import { Request, Response } from 'express';
export class TaskGetController {

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error' });
  };
  getTask = async (req: Request, res: Response) => {
    const getTask = await taskService.getTask();
    res.json({ ok: true, getTask });
  };
  getTaskById = async (req: Request, res: Response) => {
    const getTaskById = await taskService.getTaskById();
    res.json({ ok: true, getTaskById });
  };
}
