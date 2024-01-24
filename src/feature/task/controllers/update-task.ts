/* eslint-disable @typescript-eslint/no-unused-vars */

import { taskService } from '@service/task.service';
import { Request, Response } from 'express';
export class TaskUpdateController {
  // @joiValidation(signupSchema)


  updateTask = async(req: Request, res: Response) => {
    const updateTask =await taskService.getTaskUpdate();
    res.json({ok:true,updateTask});

  };


  deleteTask = async(req: Request, res: Response) => {
    const deleteTask =await taskService.getTaskDelete();
    res.json({ok:true,deleteTask});

  };
}
