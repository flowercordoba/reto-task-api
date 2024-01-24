/* eslint-disable @typescript-eslint/no-unused-vars */

import { taskService } from '@service/task.service';
import { Request, Response } from 'express';
export class TaskGetController {
  // @joiValidation(signupSchema)


  getTask = async(req: Request, res: Response) => {
    const getTask =await taskService.getTask();
    res.json({ok:true,getTask});

  };
  getTaskById = async(req: Request, res: Response) => {
    const getTaskById =await taskService.getTaskById();
    res.json({ok:true,getTaskById});

  };
}
