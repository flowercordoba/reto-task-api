/* eslint-disable @typescript-eslint/no-unused-vars */

import { TaskDto } from '@domain/index';
import { CustomError } from '@root/shared/utils';
import { TaskService } from '@service/task.service';
import { Request, Response } from 'express';
export class TaskController {
  constructor( private readonly _taskService:TaskService){

  }
  
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal server error' });
  };
  
  create = (req: Request, res: Response) => {
    const [error, createTaskDto] = TaskDto.create({
      ...req.body,
      user: req.body.user.id
    });

    if (error) {
      return res.status(400).json({ error });
    }
    // return res.json('createTask')

    this._taskService
      .createTask(createTaskDto!)
      .then((task) => res.status(201).json(task))
      .catch((error) => this.handleError(error, res));
  };

  // createTask = async (req: Request, res: Response) => {
  //   const [error, createTaskDto] = TaskDto.create(req.body);
  //   if (error) {
  //     return res.status(400).json({ error });
  //   }
  
  //   this._taskService.createTask(createTaskDto!, req.body.user)
  //     .then(task => res.status(201).json(task))
  //     .catch(error => this.handleError(error, res));
  // };

  // createTask = async (req: Request, res: Response) => {
  //   const [_, createTaskDto] = TaskDto.create(req.body);

  //   try {
  //     const task = await this._taskService.createTask(createTaskDto, req.body.user);
  //     res.json(task);
  //   } catch (error) {
  //     this.handleError(error, res);
  //   }
  // };
  

  // sendTask = async (req: Request, res: Response) => {
  //   const sendTask = await taskService.asignarTask();
  //   res.json({ ok: true, sendTask });
  // };
}
