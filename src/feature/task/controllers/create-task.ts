/* eslint-disable @typescript-eslint/no-unused-vars */

import { taskService } from '@service/task.service';
import { Request, Response } from 'express';
export class TaskController {
  // @joiValidation(signupSchema)

  createTask = async (req: Request, res: Response) => {
    const createTask = await taskService.createTask();
    res.json({ ok: true, createTask });
  };
  sendTask = async (req: Request, res: Response) => {
    const sendTask = await taskService.asignarTask();
    res.json({ ok: true, sendTask });
  };
}
